import React from 'react'
import './Movies.css'
import { useHistory} from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Button,Card } from '@mui/material';



export function MovieDetails() {
    const[{id,name,poster,rating,votes,genres,language,duration, releaseDate}]=[{
        id:1,
        name:"Spider-Man: No Way Home",
        poster:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
        rating:57,
        votes:20,
        genres:["Action","Adventure","SI-Fi"],
        language:"English",
        duration:"2h 45min",
        releaseDate:"20-1-2021"
      }]
      const history=useHistory();
    return (
        <div className='movie-details'>
            <div className='Bck-poster'>
        <img src={"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg"} alt=""/>
            </div>
            <div className='summery'>
                <h1>{name}</h1>
                <h2><span><FavoriteBorderOutlinedIcon color="error"/></span>{rating}Ratings {votes}K Votes</h2>
                <h3>{language}</h3>
                <h4>{duration}. {genres}.{releaseDate}</h4>
                <Button 
                color='error' variant="outlined"
                 size="large"
                 onClick={()=>history.push(`/theatersList`)}
                 >Book-Tickets</Button>
            </div>
        </div>
    )
}
