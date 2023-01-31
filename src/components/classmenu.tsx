import React, { useState } from "react";

const ClassMenu = () => {
  const [active, setActive] = useState("");

  return (
    <div className="container m-0 p-0">
      <div className="col-2 vh-100 bg-dark">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a
              className="nav-link rounded-0 p-2 text-light active bg-custom-color-3"
              href="#"
            >
              SF340
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link rounded-0 p-3 text-light" href="#">
              SF342
            </a>
          </li>
        </ul>

        <button className="btn btn-sm text-custom-color-3 border-0 mt-3">
          + Add class
        </button>
      </div>
    </div>
  );
};

export default ClassMenu;