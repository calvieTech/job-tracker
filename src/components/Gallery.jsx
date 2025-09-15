import React from 'react';
import './gallery.css';
import Card from './Card';
import AddModal from './AddModal';

function Gallery({
  inputData,
  setInputData,
  isModalOpen,
  setIsModalOpen,
  items,
}) {
  return (
    <main className="gallery--container">
      {isModalOpen && (
        <AddModal
          setIsModalOpen={setIsModalOpen}
          inputData={inputData}
          setInputData={setInputData}
        />
      )}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
}

export default Gallery;
