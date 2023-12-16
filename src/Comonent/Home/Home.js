import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Container, Paper, Grid, Toolbar, AppBar, CssBaseline, Box,Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cleanup } from '@testing-library/react';
const defaultTheme = createTheme();

export default function Home() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

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
      await axios.post("http://localhost:3002/cart", item);
      console.log("Item added to cart:", item);

     
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
          navigate('/cart');

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 10,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
             View all products
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              You will find all kinds of products here,
            </Typography>
          </Container>
        </Box>
<Container sx={{ py: 4 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {data.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      16:9,
                      pt: '86.25%',
                    }}
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h5">
                      {item.title}
                    </Typography>
                    <Typography>
                      Price : {item.price} Rs
                    </Typography>
                  </CardContent>
                  <CardActions indicatorColor="inherit"
                    textColor="inherit"
                    value={value}
                     onChange={(e, value) => setValue(value)}>
                    <Button size="small" onClick={() => addToCart(item)}>
                      Add To Cart</Button>
                    {/* <Button size="small">Edit</Button> */}
                    </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </main>
        </ThemeProvider>
  );
}