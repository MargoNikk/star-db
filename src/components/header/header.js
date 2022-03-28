import React from 'react';
import { Link } from "react-router-dom";
import { AuthButton } from "../authorization";

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/"> Star DB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
        <li>
          <Link to="/jeditemple">Jedi Temple</Link>
        </li>
      </ul>
      <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
        Change service
      </button>
      <AuthButton />
    </div >
  );
};

export default Header;