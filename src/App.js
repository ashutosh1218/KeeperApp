import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from "./Note";
// import notes from "./notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);
  function handleClick(item) {
    updateNotes((prevItems) => {
      return [...prevItems, item]
    })
  }
  function deleteNote(id) {
    updateNotes((prevItems) => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    }
    )
}
  return (
    <div className="App">
      <Header />
      <CreateArea click={handleClick} />
      {notes.map((note, index) =>
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onCheck={deleteNote}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
