import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Div = styled('div')({
  margin:"100px",
});

export default function Cart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/cart")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (itemId) => {
    axios.delete(`http://localhost:3002/cart/${itemId}`)
      .then((res) => {
        const updatedData = data.filter((item) => item.id !== itemId);
        setData(updatedData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Div>
    {
      data.map((x, index) => (
    <Paper
      sx={{
        p:2,
        margin: '8px',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >

      <Grid container  spacing={6} key={index} >
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={x.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {x.item}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {x.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {x.price}
              </Typography>
            </Grid>
            <Grid item sx={{ marginLeft: "auto" }}>
              <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={() => handleDelete(x.id)} >
                Remove
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>

    </Paper>
          ))
        }
        </Div>

  );
}
