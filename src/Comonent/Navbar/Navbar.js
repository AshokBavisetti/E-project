import React, { useState , useEffect} from 'react'
import { AppBar, Toolbar, Box, Button, Container, CssBaseline, Grid, Paper, TextField, Typography, Link, GlobalStyles, useTheme, useMediaQuery,Slide,useScrollTrigger} from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuBar from './MenuBar';
import { useNavigate } from 'react-router-dom';
const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (<>
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
    </>
  );
};

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
  return (
    <React.Fragment>
      <HideOnScroll>
      <AppBar color='default' sx={{ bgcolor: "white"}}>
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
      </HideOnScroll>
    </React.Fragment>
  )
}

