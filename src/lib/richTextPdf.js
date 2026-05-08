// Shared rich-text → jsPDF renderer
// Mirrors the semantics of `RichTextDisplay` (bold/italic + custom lists),
// but renders into a PDF instead of the DOM.

export function renderRichTextToPdf({
  pdf,
  html,
  x,
  y,
  maxWidth,
  lineHeight = 2.5,
  listIndent = 2.3,
  blockSpacing,
  itemSpacing,
  maxHeight,
}) {
  if (!pdf || !html || maxWidth <= 0) return y;

  const raw =
    html != null ? String(html).replace(/\\n/g, "\n").trim() : "";
  if (!raw) return y;

  const startY = y;
  const maxY =
    maxHeight != null && Number.isFinite(Number(maxHeight))
      ? startY + Number(maxHeight)
      : null;
  let isClipped = false;

  // If no tags, treat as plain text with newlines.
  if (!/<[a-z][\s\S]*>/i.test(raw)) {
    const lines = raw.split(/\r?\n/);
    lines.forEach((line) => {
      if (isClipped) return;
      if (!line) {
        if (maxY != null && y + lineHeight > maxY + 0.001) {
          isClipped = true;
          return;
        }
        y += lineHeight;
        return;
      }
      const wrapped = pdf.splitTextToSize(line, maxWidth);
      wrapped.forEach((w) => {
        if (isClipped) return;
        if (maxY != null && y + lineHeight > maxY + 0.001) {
          isClipped = true;
          return;
        }
        pdf.text(w, x, y);
        y += lineHeight;
      });
    });
    return y;
  }

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = raw;

  const lh = Number(lineHeight);
  const liIndent = Number(listIndent);
  const blkSpacing =
    blockSpacing !== undefined
      ? Number(blockSpacing)
      : Math.max(1, lh * 0.8);
  const itmSpacing =
    itemSpacing !== undefined
      ? Number(itemSpacing)
      : Math.max(0.3, lh * 0.25);

  const drawListMarker = (type, mx, my, markerLh = lh) => {
    if (type === "arrow") {
      const centerY = my - markerLh * 0.32;
      const arrowStartX = mx;
      const arrowEndX = mx + Math.max(2.0, markerLh * 0.56);
      const headDX = Math.max(0.6, markerLh * 0.22);
      const headDY = Math.max(0.45, markerLh * 0.18);
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.35);
      pdf.line(arrowStartX, centerY, arrowEndX, centerY);
      pdf.line(arrowEndX - headDX, centerY - headDY, arrowEndX, centerY);
      pdf.line(arrowEndX - headDX, centerY + headDY, arrowEndX, centerY);
      return;
    }

    if (type === "stripe") {
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.35);
      pdf.line(mx, my - markerLh * 0.64, mx, my - markerLh * 0.08);
      return;
    }

    pdf.text("•", mx, my);
  };

  // ── Inline segment collector ──────────────────────────────────────────────
  // Walks a DOM node and returns a flat array of { text, bold, italic } segments.
  const collectInlineSegments = (node, bold = false, italic = false) => {
    const segments = [];

    if (node.nodeType === 3) {
      // Text node – collapse whitespace but keep a single space between words
      const text = node.textContent.replace(/\s+/g, " ");
      if (text) segments.push({ text, bold, italic });
      return segments;
    }

    if (node.nodeType === 1) {
      const tag = node.tagName.toLowerCase();
      const isBold   = bold   || tag === "strong" || tag === "b";
      const isItalic = italic || tag === "em"     || tag === "i";

      if (tag === "br") {
        segments.push({ text: "\n", bold, italic });
        return segments;
      }

      node.childNodes.forEach((child) => {
        segments.push(...collectInlineSegments(child, isBold, isItalic));
      });
    }

    return segments;
  };

  // ── Render a flat array of inline segments, word-wrapping across the full
  //    availableWidth.  Honours bold/italic font changes mid-line.
  const renderInlineSegments = (
    segments,
    offsetX,
    availableWidth,
    localLineHeight = lh
  ) => {
    if (!segments.length || isClipped) return;

    // Build a list of word tokens: { word, bold, italic }.
    // We split on spaces/newlines so we can re-flow them, then normalize
    // whitespace so list lines do not start with artificial indentation.
    const tokens = [];
    segments.forEach(({ text, bold, italic }) => {
      // Split on explicit newlines first
      const parts = text.split("\n");
      parts.forEach((part, pi) => {
        const words = part.split(" ");
        words.forEach((word, wi) => {
          if (word) tokens.push({ word, bold, italic });
          // Preserve spaces between words as a zero-width glue token
          if (wi < words.length - 1) tokens.push({ word: " ", bold, italic });
        });
        if (pi < parts.length - 1) tokens.push({ word: "\n", bold: false, italic: false });
      });
    });

    // Normalize tokens:
    // - remove leading spaces at line/document start
    // - remove repeated spaces caused by HTML indentation/newlines
    const normalizedTokens = [];
    let lineHasContent = false;
    tokens.forEach((token) => {
      if (token.word === "\n") {
        normalizedTokens.push(token);
        lineHasContent = false;
        return;
      }

      if (token.word === " ") {
        const prev = normalizedTokens[normalizedTokens.length - 1];
        if (!lineHasContent || !prev || prev.word === " " || prev.word === "\n") {
          return;
        }
      }

      normalizedTokens.push(token);
      if (token.word !== " ") lineHasContent = true;
    });

    // Helper: measure a word with the right font
    const measureWord = (token) => {
      const style = token.bold && token.italic
        ? "bolditalic"
        : token.bold
        ? "bold"
        : token.italic
        ? "italic"
        : "normal";
      pdf.setFont("helvetica", style);
      return pdf.getStringUnitWidth(token.word) * pdf.getFontSize() / pdf.internal.scaleFactor;
    };

    // Greedy line-wrap
    let lineTokens = [];
    let lineWidth  = 0;

    const flushLine = () => {
      if (!lineTokens.length || isClipped) return;
      if (maxY != null && y + localLineHeight > maxY + 0.001) {
        isClipped = true;
        return;
      }
      let curX = offsetX;
      // Trim trailing space token
      while (lineTokens.length && lineTokens[lineTokens.length - 1].word === " ") {
        lineTokens.pop();
      }
      lineTokens.forEach((t) => {
        const style = t.bold && t.italic
          ? "bolditalic"
          : t.bold
          ? "bold"
          : t.italic
          ? "italic"
          : "normal";
        pdf.setFont("helvetica", style);
        pdf.text(t.word, curX, y);
        curX += measureWord(t);
      });
      y += localLineHeight;
      lineTokens = [];
      lineWidth  = 0;
      // Reset font to normal after each line
      pdf.setFont("helvetica", "normal");
    };

    normalizedTokens.forEach((token) => {
      if (isClipped) return;
      if (token.word === "\n") {
        flushLine();
        return;
      }

      const w = measureWord(token);

      // If adding this token would overflow AND it's not the first token,
      // flush the current line first.
      if (lineWidth + w > availableWidth + 0.01 && lineTokens.length > 0) {
        // Don't start a new line with a space
        if (token.word === " ") return;
        flushLine();
      }

      lineTokens.push(token);
      lineWidth += w;
    });

    flushLine();
    pdf.setFont("helvetica", "normal");
  };

  // ── Main recursive renderer ───────────────────────────────────────────────
  const renderNode = (node, indent = 0, listType = "disc") => {
    if (isClipped) return;
    // TEXT NODE at block level (shouldn't normally happen, but handle gracefully)
    if (node.nodeType === 3) {
      const text = node.textContent.replace(/\s+/g, " ").trim();
      if (text) {
        const availableWidth = Math.max(10, maxWidth - indent);
        renderInlineSegments([{ text, bold: false, italic: false }], x + indent, availableWidth);
      }
      return;
    }

    // ELEMENT NODE
    if (node.nodeType === 1) {
      const tag = node.tagName.toLowerCase();

      // ── <p> – collect all inline children and render as a wrapped paragraph
      if (tag === "p") {
        const segments = [];
        node.childNodes.forEach((child) => {
          segments.push(...collectInlineSegments(child));
        });
        // Trim leading/trailing empty space tokens
        const text = segments.map((s) => s.text).join("").trim();
        if (text) {
          const availableWidth = Math.max(10, maxWidth - indent);
          renderInlineSegments(segments, x + indent, availableWidth);
        }
        if (!isClipped) {
          if (maxY != null && y + blkSpacing > maxY + 0.001) {
            isClipped = true;
            return;
          }
          y += blkSpacing;
        }
        return;
      }

      if (tag === "ul") {
        let type = "disc";
        if (node.classList.contains("rich-ul-arrow")) type = "arrow";
        else if (node.classList.contains("rich-ul-stripe")) type = "stripe";

        // Render only direct <li> children.
        // Rich editors may inject whitespace text nodes or stray blocks between
        // list items; those should not create visible line breaks in exports.
        const listItems = Array.from(node.childNodes).filter(
          (child) =>
            child.nodeType === 1 && child.tagName.toLowerCase() === "li"
        );

        listItems.forEach((child) => {
          if (isClipped) return;
          // Do not push first-level list content too far to the right.
          // `li` itself handles marker/text spacing.
          renderNode(child, indent, type);
        });
        if (!isClipped) {
          if (maxY != null && y + blkSpacing > maxY + 0.001) {
            isClipped = true;
            return;
          }
          y += blkSpacing;
        }
        return;
      }

      if (tag === "li") {
        const itemStyleAttr = node.getAttribute("data-bullet-style");
        const itemListType =
          itemStyleAttr === "arrow" || itemStyleAttr === "stripe" || itemStyleAttr === "disc"
            ? itemStyleAttr
            : listType;
        const symbolX = x + indent;
        let isMarkerDrawn = false;
        // Keep arrow list spacing unchanged; make disc/stripe a bit tighter.
        const isArrowList = itemListType === "arrow";
        const isStripeList = itemListType === "stripe";
        // Horizontal (X-axis) gap between marker and text.
        // Keep it clearly visible without introducing large left padding.
        const markerTextGap = isArrowList
          ? Math.max(1.7, liIndent * 0.95)
          : isStripeList
          ? Math.max(1.15, liIndent * 0.52)
          : Math.max(0.95, liIndent * 0.42);
        const listItemLineHeight = isArrowList ? lh * 1.22 : lh * 1.22;
        const hasRenderableContent = (child) => {
          if (child.nodeType === 3) {
            return Boolean(child.textContent?.replace(/\s+/g, " ").trim());
          }
          if (child.nodeType !== 1) return false;
          const childTag = child.tagName.toLowerCase();
          if (childTag === "br" || childTag === "ul" || childTag === "ol") {
            return false;
          }
          return Boolean(child.textContent?.replace(/\s+/g, " ").trim());
        };

        const renderChildWithMarker = (child) => {
          if (!isMarkerDrawn && hasRenderableContent(child)) {
            if (maxY != null && y + listItemLineHeight > maxY + 0.001) {
              isClipped = true;
              return;
            }
            drawListMarker(itemListType, symbolX, y, listItemLineHeight);
            isMarkerDrawn = true;
          }

          if (child.nodeType === 1 && child.tagName.toLowerCase() === "p") {
            // Collect inline segments from this <p> inside <li>
            const segments = [];
            child.childNodes.forEach((c) => {
              segments.push(...collectInlineSegments(c));
            });
            const text = segments.map((s) => s.text).join("").trim();
            if (text) {
              const availableWidth = Math.max(
                10,
                maxWidth - indent - markerTextGap
              );
              renderInlineSegments(
                segments,
                x + indent + markerTextGap,
                availableWidth,
                listItemLineHeight
              );
            }
          } else {
            renderNode(child, indent + markerTextGap, itemListType);
          }
        };

        node.childNodes.forEach((child) => {
          if (isClipped) return;
          renderChildWithMarker(child);
        });
        if (!isMarkerDrawn) return;
        if (maxY != null && y + itmSpacing > maxY + 0.001) {
          isClipped = true;
          return;
        }
        y += itmSpacing;
        return;
      }

      // ── <strong> / <b> / <em> / <i> at block level (edge case)
      //    Collect inline content and render it directly.
      if (
        tag === "strong" || tag === "b" ||
        tag === "em"     || tag === "i"
      ) {
        const isBold   = tag === "strong" || tag === "b";
        const isItalic = tag === "em"     || tag === "i";
        const segments = [];
        node.childNodes.forEach((child) => {
          segments.push(...collectInlineSegments(child, isBold, isItalic));
        });
        if (segments.length) {
          const availableWidth = Math.max(10, maxWidth - indent);
          renderInlineSegments(segments, x + indent, availableWidth);
        }
        return;
      }

      if (tag === "br") {
        if (maxY != null && y + lh > maxY + 0.001) {
          isClipped = true;
          return;
        }
        y += lh;
        return;
      }

      // Default: traverse children
      node.childNodes.forEach((child) => {
        if (isClipped) return;
        renderNode(child, indent, listType);
      });
    }
  };

  tempDiv.childNodes.forEach((node) => renderNode(node));
  return y;
}