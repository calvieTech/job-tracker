import React from 'react';
import './card.css';

function Card() {
  return (
    <div className="card--container">
      <div className="card--name">Name</div>
      <div className="card--description">Description</div>
      <div className="card--detail">Detail</div>
    </div>
  );
}

export default Card;
