import React, { useState } from 'react';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import Header from './components/Header';
import './styles/style.css';
import { getInitialData } from './utils/index';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header onSearch={setSearchTerm} />
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={filteredNotes.filter((note) => !note.archived)}
        onDelete={deleteNote}
        onArchive={archiveNote}
      />
      <h2>Arsip</h2>
      <NoteList
        notes={filteredNotes.filter((note) => note.archived)}
        onDelete={deleteNote}
        onArchive={archiveNote}
      />
    </div>
  );
};

export default App;
