import React from "react";

const Note = ({ note }) => {
  return (
    <div className="card mt-3">
      <p className="px-3">+ {note}</p>
    </div>
  );
};

export default Note;
