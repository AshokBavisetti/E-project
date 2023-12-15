import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Comonent/Navbar/Navbar"
import Home from "./Comonent/Home/Home";
import Cart from "./Comonent/Cart/Cart";
import Login from './Comonent/Login/Login';
import Logout from './Comonent/Logout/Logout'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material"


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
