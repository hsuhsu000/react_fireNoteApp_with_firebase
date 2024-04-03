import React from "react";
import { useState } from "react";
const AddNote = ({ getNotes }) => {
  //define state
  const [note, setNote] = useState("");

  //add new note
  const addNote = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://firenote-8694a-default-rtdb.firebaseio.com/notes.json", {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setNote("");
      getNotes();
    } catch (err) {
      alert("Erro!Try Again!");
    }
  };
  return (
    <section>
      <form className="d-flex" onSubmit={addNote}>
        <input type="text" className="form-control me-3" placeholder="add note here" value={note} onChange={(e) => setNote(e.target.value)}></input>
        <button className="btn btn-primary">Add</button>
      </form>
    </section>
  );
};

export default AddNote;
