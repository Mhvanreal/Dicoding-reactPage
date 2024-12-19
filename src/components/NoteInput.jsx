import React, { useState } from "react";

const NoteInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLeft, setCharLeft] = useState(50);

  const onTitleChange = (e) => {
    const value = e.target.value.slice(0, 50);
    setTitle(value);
    setCharLeft(50 - value.length);
  };

  const onBodyChange = (e) => setBody(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      addNote({
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toLocaleDateString(),
      });
      setTitle("");
      setBody("");
      setCharLeft(50);
    }
  };

  return (
    <form onSubmit={onSubmit} className="note-input">
      <p>Sisa karakter: {charLeft}</p>
      <input
        type="text"
        placeholder="Ini adalah judul ..."
        value={title}
        onChange={onTitleChange}
      />
      <textarea
        placeholder="Tuliskan catatanmu di sini ..."
        value={body}
        onChange={onBodyChange}
      ></textarea>
      <button type="submit">Buat</button>
    </form>
  );
};

export default NoteInput;
