import React from 'react'
import {AppBar,Box,Toolbar,Typography,Button } from '@mui/material';
import './Topbar.css'
import { useHistory} from "react-router-dom";


export  function MinTopbar() {  
  const history=useHistory();   
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
         
          <Typography className='main' variant="h6" color="inherit" component="div">
          <Typography className='right' variant="h6" color="inherit" component="div">
          <Button color="error" onClick={()=>history.push("/")}>Movies</Button>
          <Button color="error" onClick={()=>history.push("/admin/home")}>Admin</Button>
          <Button color="error">Events</Button>
          <Button color="error">Plays</Button>
          <Button color="error">Sports</Button>
          <Button color="error">Buzz</Button>
          </Typography>
          <Typography className='left' variant="h6" color="inherit" component="div">
          <Button color="error">ListYourShows</Button>
          <Button color="error">Corporate</Button>
          <Button color="error">Offers</Button>
          <Button color="error">GiftCard</Button>
          </Typography>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );

}
