import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/cart")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Welcome to Cart</h1>
      {
        data.map((x, index) => (
          <div key={index}>
            <img src={x.image} height={80}  width={70}alt={x.title} />
            <p>{x.item}</p>
            <p>{x.title}</p>
            <p><strong>Price:</strong> $ {x.price}</p>
            <button>Delete</button>
          </div>
        ))
      }
    </div>
  );
}
