import React, { FunctionComponent, CSSProperties } from 'react';
import { EditorState, SelectionState, DraftHandleValue } from 'draft-js';

type TToolbarControl = "title" | "bold" | "italic" | "underline" | "link" | "numberList" | "bulletList" | "quote" | "code" | "clear" | "save" | "media" | "strikethrough" | "highlight" | string;
type TControlType = "inline" | "block" | "callback" | "atomic";
type TToolbarButtonSize = "small" | "medium";
type TToolbarComponentProps = {
    id: string;
    onMouseDown: (e: React.MouseEvent) => void;
    active: boolean;
    disabled: boolean;
};
type TCustomControl = {
    id?: string;
    name: string;
    icon?: JSX.Element;
    type: TControlType;
    component?: FunctionComponent<TToolbarComponentProps>;
    inlineStyle?: React.CSSProperties;
    blockWrapper?: React.ReactElement;
    atomicComponent?: FunctionComponent;
    onClick?: (editorState: EditorState, name: string, anchor: HTMLElement | null) => EditorState | void;
};

type TAutocompleteItem = {
    keys: string[];
    value: any;
    content: string | JSX.Element;
};

type TDecorator = {
    component: FunctionComponent;
    regex: RegExp;
};
type TAutocompleteStrategy = {
    triggerChar: string;
    items: TAutocompleteItem[];
    insertSpaceAfter?: boolean;
    atomicBlockName?: string;
};
type TAutocomplete = {
    strategies: TAutocompleteStrategy[];
    suggestLimit?: number;
};
type TAsyncAtomicBlockResponse = {
    data: any;
};
type TMUIRichTextEditorRef = {
    focus: () => void;
    save: () => void;
    /**
     * @deprecated Use `insertAtomicBlockSync` instead.
     */
    insertAtomicBlock: (name: string, data: any) => void;
    insertAtomicBlockSync: (name: string, data: any) => void;
    insertAtomicBlockAsync: (name: string, promise: Promise<TAsyncAtomicBlockResponse>, placeholder?: string) => void;
};
type TDraftEditorProps = {
    spellCheck?: boolean;
    stripPastedStyles?: boolean;
    handleDroppedFiles?: (selectionState: SelectionState, files: Blob[]) => DraftHandleValue;
};
type TKeyCommand = {
    key: number;
    name: string;
    callback: (state: EditorState) => EditorState;
};
type TMUIRichTextEditorProps = {
    id?: string;
    /**
     * @deprecated Use `defaultValue` instead.
     */
    value?: any;
    defaultValue?: any;
    label?: string;
    readOnly?: boolean;
    inheritFontSize?: boolean;
    error?: boolean;
    controls?: Array<TToolbarControl>;
    customControls?: TCustomControl[];
    decorators?: TDecorator[];
    toolbar?: boolean;
    toolbarButtonSize?: TToolbarButtonSize;
    inlineToolbar?: boolean;
    inlineToolbarControls?: Array<TToolbarControl>;
    draftEditorProps?: TDraftEditorProps;
    keyCommands?: TKeyCommand[];
    maxLength?: number;
    autocomplete?: TAutocomplete;
    onSave?: (data: string) => void;
    onChange?: (state: EditorState) => void;
    onFocus?: () => void;
    onBlur?: () => void;
} & any;
interface IMUIRichTextEditorProps extends TMUIRichTextEditorProps {
}
interface TMUIRichTextEditorStyles {
    components?: {
        MUIRichTextEditor?: {
            styleOverrides?: {
                root?: CSSProperties;
                container?: CSSProperties;
                inheritFontSize?: CSSProperties;
                editor?: CSSProperties;
                editorContainer?: CSSProperties;
                editorReadOnly?: CSSProperties;
                error?: CSSProperties;
                hidePlaceholder?: CSSProperties;
                placeHolder?: CSSProperties;
                linkPopover?: CSSProperties;
                linkTextField?: CSSProperties;
                anchorLink?: CSSProperties;
                toolbar?: CSSProperties;
                inlineToolbar?: CSSProperties;
            };
        };
    };
}

type TAlignment = "left" | "center" | "right";
type TMediaType = "image" | "video";
type TUrlData = {
    url?: string;
    width?: number;
    height?: number;
    alignment?: TAlignment;
    type?: TMediaType;
};

export type { IMUIRichTextEditorProps, TAlignment, TAsyncAtomicBlockResponse, TAutocomplete, TAutocompleteItem, TAutocompleteStrategy, TControlType, TCustomControl, TDecorator, TDraftEditorProps, TKeyCommand, TMUIRichTextEditorProps, TMUIRichTextEditorRef, TMUIRichTextEditorStyles, TMediaType, TToolbarButtonSize, TToolbarComponentProps, TToolbarControl, TUrlData };
