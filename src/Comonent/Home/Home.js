import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = async (item) => {
    try {
      await axios.post("http://localhost:3001/cart", item);
      console.log("Item added to cart:", item);

     
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
          navigate('/cart');

  };

  return (
    <div className="home-container">
      <div id="Wel">
        <marquee>
          <h2>Welcome to the Products Page</h2>
        </marquee>
      </div>

      <ul className="product-list">
        {data.map((item) => (
          <li key={item.id} className="product-item">
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-details">
              <strong>{item.title}</strong>
              <p>
                <strong>Price:</strong> ${item.price}
              </p>
              <button className="add-to-cart" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <footer>
  <p>&copy; 2023 Your Company Name. All rights reserved.</p>
</footer>
      </div>

    </div>
   
  );
  

};

export default Home;
