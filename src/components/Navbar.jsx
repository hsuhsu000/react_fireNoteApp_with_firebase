import React from "react";

const Navbar = ({ getNotes }) => {
  return (
    <div className="d-flex justify-content-between m-5">
      <h3 className="text-primary">FireNote</h3>

      <div>
        <button className="btn btn-outline-primary" onClick={getNotes}>
          Refresh Notes
        </button>
      </div>
    </div>
  );
};

export default Navbar;
