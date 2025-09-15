import React, { useEffect, useState } from 'react';
import './home.css';
import NavBar from '../components/NavBar';
import Gallery from '../components/Gallery';

function Home() {
  const [inputData, setInputData] = useState({
    name: '',
    description: '',
    quantity: 0,
    category: ['electronics', 'clothing', 'books', 'other'],
    price: 0,
    location: ['warehouse', 'in-store', 'online'],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <NavBar setIsModalOpen={setIsModalOpen} />
      <Gallery
        inputData={inputData}
        setInputData={setInputData}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        items={items}
      />
    </div>
  );
}

export default Home;
