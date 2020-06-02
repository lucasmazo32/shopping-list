import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/welcome.png';
import '../assets/styles/Welcome.css';

export default function Welcome() {
  return (
    <div className="welcome">
      <h2>Lista de compras</h2>
      <img src={logo} alt="welcome logo" />
      <div className="create-select">
        <Link to="/create" className="btn btn-create">Nueva lista</Link>
      </div>
    </div>
  );
}
