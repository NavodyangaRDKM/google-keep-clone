import React, { useState } from 'react';
import CreateArea from './components/CreateArea';
import Header from './components/Header';
import Note from './components/Note';
import Count from './components/Count';
import Footer from './components/Footer'
import './styles.css';

function App(props) {
  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote];
    });

  }
  function deleteNote(id) {
    setNotes(prevValue => {
      return [...prevValue.filter((note, index) => index !== id)]
    })
  }

  return (
    <div>
      <Header />
      <Count count={notes.length === 0 ? "Empty" : 'showing Notes in Database'} />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        < Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote} />

      ))}
      <Footer />
    </div>
  );
}

export default App;
