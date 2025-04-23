import React, { useEffect, useRef, useState } from "react";

import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const RichtextEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (content: string) => void;
}) => {
  const [editorValue, setEditorValue] = useState(value || "");
  const quillRef = useRef(false);

  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = true; // mark as mounted

      setTimeout(() => {
        document.querySelectorAll(".ql-toolbar").forEach((toolbar, index) => {
          if (index > 0) {
            toolbar.remove();
          }
        });
      }, 100);
    }
  }, []);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <div className="relative">
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={(content) => {
          setEditorValue(content);
          onChange(content);
        }}
        placeholder="Write a detailed product description here..."
        className="bg-transparent border border-gray-700 text-white rounded-md"
        style={{
          minHeight: "250px",
          fontFamily: "Arial, sans-serif",
          color: "#fff",
        }}
        modules={modules}
      />
      <style>
        {`
        .ql-container{
        background:transparent;
        border-color:#444;
        color:white;
        }
          .ql-toolbar {
            border: none;
            border-bottom: 1px solid #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            background:transparent;
          }
          .ql-toolbar .ql-picker-label {
            color: #fff;
            font-size: 14px;
            font-weight: bold;
          }
          .ql-toolbar .ql-picker-options {
            background-color: #333;
            border: none;
            padding: 5px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
          .ql-editor {
            font-size: 16px;
            font-family: Arial, sans-serif;
            color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
          .ql-editor:focus {
            outline: none;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
          .ql-editor .ql-placeholder,.ql-editor.ql-blank::before {
             color: #fff; 
             opacity: 0.5;
          }
        .ql-toolbar.ql-snow{
            border:none;
            border-bottom: 1px solid rgb(55 65 81 / var(--tw-border-opacity));
         }
            .ql-container.ql-snow{
            border: none;
            }
            .ql-picker-options{
            background:#333 !important;
            color:white !important;
            }
            .ql-picker{
             color:white !important;
            }
             .ql-editor{
             min-height: 200px;
             }
             .ql-snow{
             border-color:#444 !important;
             }
            .ql-picker-item{
              color:white !important;
              }
              .ql-stroke{
              stroke: white !important
              }
        `}
      </style>
    </div>
  );
};

export default RichtextEditor;
