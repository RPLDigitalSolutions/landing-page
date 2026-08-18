import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { 
  Bold, Italic, Underline as UnderlineIcon, Heading1, Heading2, Heading3, 
  List, ListOrdered, Quote, Code, AlignLeft, AlignCenter, AlignRight, 
  Link as LinkIcon, Image as ImageIcon 
} from 'lucide-react';
import { useCallback, useState } from 'react';

const ToolbarButton = ({ 
  onClick, isActive = false, disabled = false, children, title 
}: { 
  onClick: (e: any) => void; isActive?: boolean; disabled?: boolean; children: React.ReactNode; title: string 
}) => (
  <button
    onClick={(e) => { e.preventDefault(); onClick(e); }}
    disabled={disabled}
    title={title}
    className={`p-2 rounded-md transition-all ${
      isActive 
        ? 'bg-zinc-800 text-white' 
        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
    } disabled:opacity-30 disabled:cursor-not-allowed`}
  >
    {children}
  </button>
);

export default function TipTapEditor({
  content = '',
  onChange,
}: {
  content?: string;
  onChange?: (content: string) => void;
}) {
  const [, setTrigger] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Placeholder.configure({
        placeholder: 'Write your masterpiece...',
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-blue-400 underline decoration-blue-400/50 underline-offset-4 cursor-pointer' },
      }),
      Image.configure({
        HTMLAttributes: { class: 'rounded-xl max-w-full my-8 shadow-lg' },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose prose-invert max-w-none focus:outline-none min-h-[500px] bg-transparent text-white py-6',
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      if (onChange) onChange(html);
      
      const hiddenInput = document.getElementById('article-content') as HTMLInputElement;
      if (hiddenInput) {
        hiddenInput.value = html;
        // Trigger input event for any listeners
        hiddenInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    },
    onSelectionUpdate: () => {
      // Force a re-render on selection changes so active states update
      setTrigger(v => v + 1);
    },
    onTransaction: () => {
      // Force a re-render on transaction changes
      setTrigger(v => v + 1);
    }
  });

  const addImage = useCallback(() => {
    const url = window.prompt('URL of the image:');
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const toggleLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    if (previousUrl) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    const url = window.prompt('URL:', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    
    if (editor.state.selection.empty) {
      const text = window.prompt('Text to display:', url) || url;
      editor.chain()
        .focus()
        .insertContent(`<a href="${url}">${text}</a>`)
        .removeEmptyTextStyle()
        .unsetLink()
        .insertContent(' ')
        .run();
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="w-full bg-black border border-zinc-800 rounded-xl overflow-hidden focus-within:border-zinc-600 transition-colors shadow-2xl">
      <div className="flex flex-wrap items-center gap-1 p-2 bg-zinc-900 border-b border-zinc-800 sticky top-0 z-10 backdrop-blur-xl bg-zinc-900/90">
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} disabled={!editor.can().chain().focus().toggleBold().run()} title="Bold">
          <Bold size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} disabled={!editor.can().chain().focus().toggleItalic().run()} title="Italic">
          <Italic size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} disabled={!editor.can().chain().focus().toggleUnderline().run()} title="Underline">
          <UnderlineIcon size={18} />
        </ToolbarButton>
        
        <div className="w-px h-6 bg-zinc-800 mx-1"></div>
        
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })} title="Heading 1">
          <Heading1 size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })} title="Heading 2">
          <Heading2 size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive('heading', { level: 3 })} title="Heading 3">
          <Heading3 size={18} />
        </ToolbarButton>

        <div className="w-px h-6 bg-zinc-800 mx-1"></div>

        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} title="Align Left">
          <AlignLeft size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} title="Align Center">
          <AlignCenter size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} title="Align Right">
          <AlignRight size={18} />
        </ToolbarButton>

        <div className="w-px h-6 bg-zinc-800 mx-1"></div>

        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} title="Bullet List">
          <List size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} title="Numbered List">
          <ListOrdered size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')} title="Blockquote">
          <Quote size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} isActive={editor.isActive('codeBlock')} title="Code Block">
          <Code size={18} />
        </ToolbarButton>

        <div className="w-px h-6 bg-zinc-800 mx-1"></div>

        <ToolbarButton onClick={toggleLink} isActive={editor.isActive('link')} title="Link">
          <LinkIcon size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={addImage} title="Image">
          <ImageIcon size={18} />
        </ToolbarButton>
      </div>
      <div className="px-8 pb-8">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
