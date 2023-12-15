import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="BC">
      <ul className="product-list">
        {data.map((item) => (
          <li key={item.id} className="product-item">
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-details">
              <strong>{item.title}</strong>
              <p><strong>Price:</strong> ${item.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
