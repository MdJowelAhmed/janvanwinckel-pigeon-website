"use client";

import { cn } from "@/lib/utils";

/**
 * Renders stored HTML from TooltipRichTextField, or plain text with line breaks.
 */
export default function RichTextDisplay({
  html,
  fallback = null,
  className,
  block = true,
}) {
  const normalized = html != null ? String(html).replace(/\\n/g, "\n").trim() : "";
  if (!normalized) {
    if (fallback == null) return null;
    return (
      <span className={cn(block && "block", className)}>{fallback}</span>
    );
  }

  if (!/<[a-z][\s\S]*>/i.test(normalized)) {
    return (
      <span
        className={cn("whitespace-pre-line", block && "block", className)}
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
