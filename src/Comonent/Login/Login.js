// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = data;
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3002/posts', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert('Login successfully');
    navigate('/home');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="image-container">
          {/* Your image goes here */}
          <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais" alt="Login" />
        </div>
        <form onSubmit={submitHandler}>
          <input id="I"type="text" name="username" value={username} onChange={changeHandler} placeholder="Username.." required ></input> <br></br>
          <input id="I" type="password"name="password"value={password} onChange={changeHandler} placeholder="Password.." required ></input>
          <br></br>
          <input id="I" type="submit" name="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
