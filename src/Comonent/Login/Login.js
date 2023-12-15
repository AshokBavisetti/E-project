import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Login() {

  const  [data, setData]= useState({
    username:'', password:''
  })

  const {username,password}=data
const navigate = useNavigate();


  const changeHandler=e=>{
    setData({...data, [e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault();
    axios.post("http://localhost:3001/posts",data)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    alert("Login successfully")
navigate('/home');

  }

  
  return (
    <div className="App">
        <center>
     
      <form onSubmit={submitHandler}>
     
      <input type="text" name='username' value={username} onChange={changeHandler} placeholder='Username..' required ></input><br></br>
      <input type="password" name='password' value={password} onChange={changeHandler}  placeholder='Password..'required></input><br></br>
      <input type="submit" name='submit'></input>
      </form>
      </center>
    </div>
  );
}

export default Login;