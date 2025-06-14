import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAuthStore } from "../store/authStore";

const EmailEditor = () => {
  const { user, logout, sendEmailTemplate } = useAuthStore();

  const [isHtmlView, setIsHtmlView] = useState(false);
  const [content, setContent] = useState("");
  const [plainText, setPlainText] = useState("");

  const handleSave = () => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;
    const textOnly = tempElement.textContent || tempElement.innerText || "";

    setPlainText(textOnly);
    sendEmailTemplate(content, textOnly); // Send HTML + plain text
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Email Editor</h2>

      {/* 🔁 Toggle button for switching between Rich Text and HTML mode */}
      <button
        onClick={() => setIsHtmlView(!isHtmlView)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        {isHtmlView ? "Switch to Rich Text View" : "Switch to HTML Source View"}
      </button>

      {/* ✨ Conditionally render Quill or HTML Textarea */}
      {isHtmlView ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-64 p-3 border border-gray-300 rounded mb-4"
          placeholder="Paste or write HTML here..."
        />
      ) : (
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Compose your email..."
          className="mb-4"
        />
      )}

      <div className="flex gap-3">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save & Send
        </button>

        <button
          onClick={() => setContent("")}
          className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          Reset
        </button>
      </div>

      {/* 🖼 Preview */}
      <div className="mt-6">
        <h3 className="font-bold mb-2">Email Preview (HTML Rendered):</h3>
        <div
          className="border p-3 bg-gray-50"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        <h3 className="mt-4 font-bold">Email Plain Text:</h3>
        <pre className="bg-gray-100 p-2 whitespace-pre-wrap">{plainText}</pre>
      </div>
    </div>
  );
};

export default EmailEditor;
