//   //  <ul>
//   //   <Link to="/"><li>Login</li></Link>
//   //   <Link to="/Home"><li>Home</li></Link>
//   //   <Link to="/Cart"><li>Cart</li></Link>
//   //   <Link to="/Logout"><li>Logout</li></Link>
//   //  </ul>
import React, { useState } from 'react'
// import{Appbar, Typography,Toolbar} from '@mui/icons-material';
import { AppBar, Toolbar, Box, Button, Container, CssBaseline, Grid, Paper, TextField, Typography, Link, GlobalStyles, useTheme, useMediaQuery,} from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuBar from './MenuBar';
import { useNavigate } from 'react-router-dom';


// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';



export default function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const navigate = useNavigate()
  const UserProfile = () =>{
      navigate("/Home")
  }
  const UserProfile1 = () =>{
    navigate("/Logout")
}
const UserProfile2 = () =>{
  navigate("/Cart")
}
const UserProfile3 = () =>{
  navigate("/")
}
  // const Address =  {
  return (
    <React.Fragment>
      <AppBar color='default' sx={{marginTop:2, bgcolor: "white"}}>
        <Toolbar>
        
          <ShoppingCartCheckoutIcon sx={{ transform: "scale(2)" }}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              // fontWeight: 'bold',
              // letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: "2rem",
              paddingLeft: "1%"
            }}
          >
            E-Kart
          </Typography>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "1%" }}>
                E-Kart
              </Typography>
          <MenuBar/>
          </>
          ) : (
            <>
          <Tabs sx={{ marginLeft: "auto" }}
                indicatorColor="inherit"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
            <Tab label="Home" onClick={UserProfile}></Tab>
            <Tab label="Cart" onClick={UserProfile2}></Tab>
            <Tab label="Logout" onClick={UserProfile1}></Tab>
            <Tab label="Contact Us" onClick={UserProfile3}></Tab>
          </Tabs>
          <Button variant="h6" color= 'inherit' label="Login" sx={{marginLeft:"auto"}}>Login</Button>
              <Button variant="h6" color= 'inherit' label="Login">
                SignUp
              </Button>
              </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
