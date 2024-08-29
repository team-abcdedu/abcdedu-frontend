import Quill, { DeltaOperation } from 'quill';
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import 'quill/dist/quill.snow.css';

import modules from './modules';

// Define types for props
interface EditorProps {
  defaultValue?: string; // Adjust type as needed (e.g., string or Quill Delta)
  onTextChange?: (
    delta: DeltaOperation,
    oldDelta: DeltaOperation,
    source: string,
  ) => void; // Adjust type as needed
  placeholder?: string;
}

function QuillEditor(
  { defaultValue, onTextChange, placeholder }: EditorProps,
  ref: ForwardedRef<{ getQuill: () => Quill | null }>,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const onTextChangeRef = useRef<
    (delta: DeltaOperation, oldDelta: DeltaOperation, source: string) => void
  >(onTextChange || (() => {}));
  const quillRef = useRef<Quill | null>(null);
  const editorModule = useMemo(() => modules, []);

  useImperativeHandle(ref, () => {
    return {
      getQuill: () => quillRef.current,
    };
  }, [quillRef]);

  useLayoutEffect(() => {
    onTextChangeRef.current = onTextChange || (() => {});
  }, [onTextChange]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const editorContainer = container.appendChild(
      container.ownerDocument.createElement('div'),
    );
    const quill = new Quill(editorContainer, {
      modules: editorModule,
      theme: 'snow',
      placeholder,
    });

    if (defaultValue) {
      quill.setText(defaultValue);
    }

    quill.on(Quill.events.TEXT_CHANGE, (...args) => {
      onTextChangeRef.current?.(...args);
    });

    quillRef.current = quill;

    return () => {
      if (quillRef.current) quillRef.current = null;
      container.innerHTML = '';
    };
  }, [ref, placeholder, defaultValue]);

  return <div ref={containerRef}></div>;
}

QuillEditor.displayName = 'QuillEditor';

export default forwardRef(QuillEditor);
