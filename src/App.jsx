import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  //define state
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //get notes when start
  useEffect(() => {
    getNotes();
  }, []);

  //get notes
  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://firenote-8694a-default-rtdb.firebaseio.com/notes.json");
      if (!response.ok) {
        throw new Error("Cannot connect to firebase");
      }
      const notes = await response.json();
      const modifiedNote = [];
      for (const key in notes) {
        modifiedNote.push({ id: key, note: notes[key] });
      }
      setNotes(modifiedNote);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="col-6 offset-3">
        <Navbar totalNotes={notes.length}></Navbar>

        {loading && !error && <p className="m-5 text-center ">Getting Notes....</p>}
        {error && !loading && <p className="m-5 text-center ">{error}</p>}
        {!loading && !error && (
          <>
            <AddNote getNotes={getNotes}></AddNote>
            {notes.map((note, index) => (
              <Note key={index} note={note} getNotes={getNotes}></Note>
            ))}
          </>
        )}
        {notes.length === 0 && <Intro></Intro>}
      </div>
    </>
  );
}

export default App;
