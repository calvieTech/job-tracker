import React from 'react';
import './navbar.css';

function NavBar({ setIsModalOpen }) {
  const toggleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <nav className="navbar--container">
      <div className="navbar--header">
        <a className="navbar--logo" href="./">
          Job Tracker App
        </a>
        {/* <div className="navbar--add">
          <button onClick={toggleModal} className="navbar--button">
            Add New Item
          </button>
        </div> */}
        <div className="navbar--search">
          <input
            type="text"
            className="navbar--search-input"
            placeholder="Search for job"
          />
          <button className="navbar--search-button">Search</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
