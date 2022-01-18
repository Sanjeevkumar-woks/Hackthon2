import React from 'react'
import './Movies.css'
import { useHistory} from "react-router-dom";
import { Button,Card } from '@mui/material';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export  function AdminMovie({ deletButton,editbtn,id,name,poster,rating,votes,genres }) {


    const history=useHistory();
    return (
    <Card className='movie'>
      <img src={poster} alt="" className='movie-poster' />
      <h4 className='movie-name'>{name}</h4>
      <div className='movie-specs'>
          <p><span><FavoriteBorderOutlinedIcon/><sup>{rating}</sup></span></p>
          <p>{votes}K Votes</p>
      </div>
      {deletButton} {editbtn}
    </Card>);
}

