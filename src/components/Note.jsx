import React from "react";
import DeleteIcon from "../svgs/DeleteIcon";

const Note = ({ note, getNotes }) => {
  const { note: text, id } = note;
  const deleteNote = async () => {
    try {
      const response = await fetch(`https://firenote-8694a-default-rtdb.firebaseio.com/notes/${id}.json`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Fail to delete this note!");
      }
      getNotes();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="card m-3">
      <div className="d-flex justify-content-between m-2">
        <h5 className="px-3">+ {text}</h5>
        <div onClick={deleteNote}>
          <DeleteIcon></DeleteIcon>
        </div>
      </div>
    </div>
  );
};

export default Note;
