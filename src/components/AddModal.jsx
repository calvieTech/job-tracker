import React from 'react';
import './addmodal.css';

function AddModal({ setIsModalOpen, inputData, setInputData }) {
  const addNewItem = (e) => {
    e.preventDefault();
    console.log(inputData);

    setInputData({
      title: '',
      company: '',
      quantity: 0,
      category: ['electronics', 'clothing', 'books', 'other'],
      price: 0,
      location: ['warehouse', 'in-store', 'online'],
    });
  };

  const handleTitleChange = (e) => {
    setInputData({ ...inputData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setInputData({ ...inputData, description: e.target.value });
    console.log(inputData);
  };

  const handleQuantityChange = (e) => {
    setInputData({ ...inputData, quantity: e.target.value });
    console.log(inputData);
  };

  const handleCategoryChange = (e) => {
    setInputData({ ...inputData, category: e.target.value });
    console.log(inputData);
  };

  const handlePriceChange = (e) => {
    setInputData({ ...inputData, price: e.target.value });
    console.log(inputData);
  };

  const handleLocationChange = (e) => {
    setInputData({ ...inputData, location: e.target.value });
    console.log(inputData);
  };

  return (
    <div id="addmodal--container">
      <div className="addmodal--content">
        <h1>
          Add a new item
          <span
            className="addmodal--close"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </span>
        </h1>
        <form className="addmodal--htmlForm" onSubmit={addNewItem}>
          <div className="addmodal--field">
            <label htmlFor="item-title" className="addmodal--label">
              Item Name
            </label>
            <input
              type="text"
              id="item-title"
              className="addmodal--input"
              placeholder="Enter job title"
              name="name"
              value={inputData.title}
              onChange={handleTitleChange}
            />
          </div>

          <div className="addmodal--field">
            <label htmlFor="description" className="addmodal--label">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="addmodal--input"
              placeholder="Enter item description"
              value={inputData.description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="addmodal--field">
            <label htmlFor="quantity" className="addmodal--label">
              Item Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="addmodal--input"
              placeholder="Enter item quantity"
              min={0}
              value={inputData.quantity}
              onChange={handleQuantityChange}
            />
          </div>

          <div className="addmodal--field">
            <label htmlFor="category" className="addmodal--label">
              Category
            </label>
            <select id="category" className="addmodal--input">
              <option value="">Select category</option>
              <option value={inputData.category[0]}>
                Electronics
              </option>
              <option
                value={inputData.category[1]}
                onChange={handleCategoryChange}
              >
                Clothing
              </option>
              <option
                value={inputData.category[2]}
                onChange={handleCategoryChange}
              >
                Books
              </option>
              <option
                value={inputData.category[3]}
                onChange={handleCategoryChange}
              >
                Other
              </option>
            </select>
          </div>
          <div className="addmodal--field">
            <label htmlFor="unit-price" className="addmodal--label">
              Unit Price
            </label>
            <input
              type="number"
              id="unit-price"
              className="addmodal--input"
              placeholder="Enter unit price"
              min={1}
              step="1.00"
              value={inputData.price}
              onChange={handlePriceChange}
            />
          </div>

          <div className="addmodal--field">
            <label htmlFor="location" className="addmodal--label">
              Location
            </label>
            <select id="location" className="addmodal--input">
              <option value="">Select location</option>
              <option
                value={inputData.location[0]}
                onChange={handleLocationChange}
              >
                Warehouse
              </option>
              <option
                value={inputData.location[1]}
                onChange={handleLocationChange}
              >
                In Store
              </option>
              <option
                value={inputData.location[2]}
                onChange={handleLocationChange}
              >
                Online
              </option>
            </select>
          </div>

          <button type="submit" className="addmodal--button">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
