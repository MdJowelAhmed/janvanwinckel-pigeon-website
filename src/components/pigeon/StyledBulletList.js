import { BulletList } from "@tiptap/extension-bullet-list";

/**
 * Bullet list with a `class` attribute for circle / arrow / stripe styling.
 */
export const StyledBulletList = BulletList.extend({
  addAttributes() {
    return {
      class: {
        default: "rich-ul-disc",
        parseHTML: (element) =>
          element.getAttribute("class") ?? "rich-ul-disc",
        renderHTML: (attributes) => ({
          class: attributes.class || "rich-ul-disc",
        }),
      },
    };
  },
});
