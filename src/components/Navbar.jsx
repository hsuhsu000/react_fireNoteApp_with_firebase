import React from "react";

const Navbar = ({ totalNotes }) => {
  return (
    <div className="d-flex justify-content-between m-5">
      <h3 className="text-primary">FireNote</h3>
      <h6>
        Total Notes - <span class="badge text-bg-primary">{totalNotes}</span>
      </h6>
    </div>
  );
};

export default Navbar;
