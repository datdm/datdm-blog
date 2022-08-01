# Config editor with React draft wysiwyg

## 👍 Install dependencies

```bash
npm install --save react-draft-wysiwyg
npm install --save-dev @types/react-draft-wysiwyg
```

```bash
npm install --save draft-js
```

```bash
npm install --save draftjs-to-html
npm install --save-dev @types/draftjs-to-html
```

```bash
npm install --save html-to-draftjs
npm install --save-dev @types/html-to-draftjs
```

## 👍 How to use

```javascript
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import "../../../assets/scss/admin/_editor.scss";

export type EditorFieldType = {
  initialValues: string,
  onChange: (newValue: string) => void,
};

/**
 * EditorField component
 * @param props EditorFieldType
 * @returns
 */
const EditorField = (props: EditorFieldType) => {
  const { initialValues = "", onChange } = props;
  const [initState, setInitState] =
    useState <
    EditorState >
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        htmlToDraft(initialValues).contentBlocks
      )
    );

  /**
   * Handle change editor state
   * @param editorState EditorState
   */
  const handleChange = (editorState: EditorState) => {
    setInitState(editorState);
  };

  /**
   * Handle blur
   */
  const handleBlur = () => {
    const value = draftToHtml(convertToRaw(initState.getCurrentContent()));
    onChange(value);
  };

  /**
   * Handle upload file
   * @param file File
   */
  const handleUploadImage = (file: File) => {};

  return (
    <Editor
      wrapperClassName="wrapper__class"
      editorClassName="editor__class"
      toolbarClassName="toolbar__class"
      editorState={initState}
      onBlur={handleBlur}
      onEditorStateChange={handleChange}
      toolbar={{
        image: {
          uploadCallback: handleUploadImage,
          alt: { present: true, mandatory: true },
        },
      }}
    />
  );
};

export default EditorField;
```
