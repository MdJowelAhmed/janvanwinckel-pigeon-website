"use client";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Bold, ChevronDown, Italic, List } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback, useEffect, useMemo, useRef, useLayoutEffect } from "react";
import { sanitizeRichHtml } from "@/lib/richTextUtils";
import { StyledBulletList } from "./StyledBulletList";

const LIST_CLASSES = {
  disc: "rich-ul-disc",
  arrow: "rich-ul-arrow",
  stripe: "rich-ul-stripe",
};

function FormatButton({ label, active, onMouseDown, children }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button
          type="button"
          aria-label={label}
          aria-pressed={active}
          onMouseDown={(e) => {
            e.preventDefault();
            onMouseDown();
          }}
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
            active && "border-teal-400 bg-teal-50 text-teal-900"
          )}
        >
          {children}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="top"
          sideOffset={6}
          className="z-[100] rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-md"
        >
          {label}
          <Tooltip.Arrow className="fill-gray-900" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export default function TooltipRichTextField({
  value,
  onChange,
  placeholder,
  className,
  editorClassName,
  minHeightClass = "min-h-[120px]",
}) {
  const isInternalChange = useRef(false);
  const onChangeRef = useRef(onChange);

  useLayoutEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const extensions = useMemo(
    () => [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        heading: false,
        blockquote: false,
        codeBlock: false,
        horizontalRule: false,
      }),
      StyledBulletList,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        // No hint text when the field already has content (e.g. edit mode with saved HTML).
        placeholder: ({ editor }) => {
          if (editor.getText().trim().length > 0) {
            return "";
          }
          return placeholder || "Write here…";
        },
      }),
    ],
    [placeholder]
  );

  const editor = useEditor(
    {
      immediatelyRender: false,
      shouldRerenderOnTransaction: true,
      extensions,
      content: value ?? "",
      editorProps: {
        attributes: {
          class: cn(
            "tiptap-editor max-w-none px-3 py-3 text-sm text-gray-900 focus:outline-none",
            minHeightClass,
            "[&_p]:my-1 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0",
            "[&_ul]:my-1",
            editorClassName
          ),
        },
        handlePaste: (view, event) => {
          const text = event.clipboardData?.getData("text/plain");
          if (text == null || text === "") return false;
          event.preventDefault();
          const { from } = view.state.selection;
          const tr = view.state.tr.insertText(text);
          view.dispatch(tr);
          return true;
        },
      },
      onUpdate: ({ editor: ed }) => {
        isInternalChange.current = true;
        onChangeRef.current(sanitizeRichHtml(ed.getHTML()));
      },
    },
    [extensions]
  );

  useEffect(() => {
    if (!editor) return;
    if (isInternalChange.current) {
      isInternalChange.current = false;
      return;
    }
    const next = value ?? "";
    const current = editor.getHTML();
    if (next !== current) {
      editor.commands.setContent(next, { emitUpdate: false });
    }
  }, [value, editor]);

  const applyListStyle = useCallback(
    (styleKey) => {
      if (!editor) return;
      const cls = LIST_CLASSES[styleKey] || LIST_CLASSES.disc;
      let chain = editor.chain().focus();
      if (!editor.isActive("bulletList")) {
        chain = chain.toggleBulletList();
      }
      chain.updateAttributes("bulletList", { class: cls }).run();
    },
    [editor]
  );

  return (
    <Tooltip.Provider delayDuration={400}>
      <div className={cn("rounded-lg border border-gray-300 bg-white", className)}>
        <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 px-2 py-1.5">
          <FormatButton
            label="Bold"
            active={editor?.isActive("bold")}
            onMouseDown={() =>
              editor?.chain().focus().toggleBold().run()
            }
          >
            <Bold className="h-4 w-4" strokeWidth={2.5} />
          </FormatButton>
          <FormatButton
            label="Italic"
            active={editor?.isActive("italic")}
            onMouseDown={() =>
              editor?.chain().focus().toggleItalic().run()
            }
          >
            <Italic className="h-4 w-4" />
          </FormatButton>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                className="inline-flex h-8 items-center gap-1 rounded-md border border-gray-200 bg-white px-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
              >
                <List className="h-4 w-4" />
                Bullets
                <ChevronDown className="h-3 w-3 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem
                onSelect={() => applyListStyle("disc")}
                className="cursor-pointer"
              >
                <span className="mr-2 text-teal-600">●</span>
                Circle bullets
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => applyListStyle("arrow")}
                className="cursor-pointer"
              >
                <span className="mr-2 text-teal-600">→</span>
                Arrow bullets
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => applyListStyle("stripe")}
                className="cursor-pointer"
              >
                <span className="mr-2 inline-block w-3 border-l-2 border-teal-500 pl-1">
                  &nbsp;
                </span>
                Stripe list
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <EditorContent editor={editor} className="rounded-b-lg focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-inset" />
      </div>
    </Tooltip.Provider>
  );
}
