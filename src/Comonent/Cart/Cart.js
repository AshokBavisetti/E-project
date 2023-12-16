import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './cart.css'; 

export default function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/cart")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (itemId) => {
    axios.delete(`http://localhost:3001/cart/${itemId}`)
      .then((res) => {
        const updatedData = data.filter((item) => item.id !== itemId);
        setData(updatedData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="product-container">
      <h1>Welcome to Cart</h1>
      {data.map((x, index) => (
        <div key={index} className="product-item">
          <img src={x.image} className="product-image" alt={x.title} />
          <p>{x.item}</p>
          <p className="product-details">{x.title}</p>
          <p><strong>Price:</strong> $ {x.price}</p>
          <button onClick={() => handleDelete(x.id)}  className="add-to-cart">Delete</button>
        </div>
      ))}
    </div>
  );
}
