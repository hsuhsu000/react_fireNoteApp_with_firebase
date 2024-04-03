import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import Navbar from "./components/Navbar";

function App() {
  //define state
  const [notes, setNotes] = useState([]);

  //get notes when start
  useEffect(() => {
    getNotes();
  }, []);

  //get notes
  const getNotes = async () => {
    const response = await fetch("https://firenote-8694a-default-rtdb.firebaseio.com/notes.json");
    const notes = await response.json();
    const modifiedNote = [];
    for (const key in notes) {
      modifiedNote.push(notes[key]);
    }
    setNotes(modifiedNote);
  };
  return (
    <>
      <div className="col-6 offset-3">
        <Navbar getNotes={getNotes}></Navbar>
        <AddNote getNotes={getNotes}></AddNote>
        {notes.map((note, index) => (
          <Note key={index} note={note}></Note>
        ))}
      </div>
    </>
  );
}

export default App;
