"use client";

import { cn } from "@/lib/utils";
import { addresultsArrayToHtml } from "@/lib/richTextUtils";

/**
 * Renders stored HTML from TooltipRichTextField, or plain text with line breaks.
 * `html` may be an `addresults`-style string[] — arrays are not stringified (which would insert commas).
 */
export default function RichTextDisplay({
  html,
  fallback = null,
  className,
  block = true,
}) {
  let raw =
    html == null
      ? ""
      : Array.isArray(html)
        ? addresultsArrayToHtml(html)
        : String(html);
  const normalized = raw
    .replace(/\\n/g, "\n")
    .replace(/<p>\s*<\/p>/gi, "<p><br /></p>");
  if (normalized.length === 0) {
    if (fallback == null) return null;
    return (
      <span className={cn(block && "block", className)}>{fallback}</span>
    );
  }

  if (!/<[a-z][\s\S]*>/i.test(normalized)) {
    return (
      <span
        className={cn("whitespace-pre-wrap", block && "block", className)}
      >
        {normalized}
      </span>
    );
  }

  const Tag = block ? "div" : "span";
  return (
    <Tag
      className={cn(
        "rich-text-display text-inherit [&_strong]:font-semibold [&_b]:font-semibold [&_em]:italic [&_i]:italic",
        block ? "block" : "inline-block max-w-full align-top",
        className
      )}
      dangerouslySetInnerHTML={{ __html: normalized }}
    />
  );
}
