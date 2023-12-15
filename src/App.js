import './App.css';
import Navbar from './Comonent/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Comonent/Login/Login';
import Home from './Comonent/Home/Home';
import Logout from './Comonent/Logout/Logout';
import Cart from './Comonent/Cart/Cart';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar/>
            
<Routes>
  <Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
  <Route path="/Cart" element={<Cart/>}/>
  <Route path="/Logout" element={<Logout/>}/>

</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
