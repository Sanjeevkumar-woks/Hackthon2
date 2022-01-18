import React from 'react'
import { Movie } from './Movie';
import './Movies.css'
import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import { Button,Card } from '@mui/material';

  
export  function  MovieList() {
  const history=useHistory();
  const get=()=>{
    fetch("https://61c41708f1af4a0017d992ac.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mvi)=>setMovieList(mvi))
  }
  useEffect(get,[]);

    const [movieList,setMovieList]=useState([
        {
          id:1,
          name:"Spider-Man: No Way Home",
          poster:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
          rating:57,
          votes:20,
          genres:["Action","Adventure","SI-Fi"],
          language:"English",
          duration:"2h 45min",
          releaseDate:"20-1-2021"
        },
        {
          id:2,
          name:"Spider-Man: No Way Home",
          poster:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
          rating:57,
          votes:20,
          genres:["Action","Adventure","SI-Fi"],
          language:"English",
          duration:"2h 45min",
          releaseDate:"20-1-2021",
        },{
          id:3,
          name:"Spider-Man: No Way Home",
          poster:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
          trailer:"https://youtu.be/5tMBgBqpWts",
          rating:57,
          votes:20,
          genres:["Action","Adventure","SI-Fi"],
          language:"English",
          duration:"2h 45min",
          releaseDate:"20-1-2021"
        },{
          id:4,
          name:"Spider-Man: No Way Home",
          poster:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
          trailer:"https://youtu.be/5tMBgBqpWts",
          rating:57,
          votes:20,
          genres:["Action","Adventure","SI-Fi"],
          language:"English",
          duration:"2h 45min",
          releaseDate:"20-1-2021"
        },{
          id:5,
          name:"Spider-Man: No Way Home",
          poster:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
          trailer:"https://youtu.be/5tMBgBqpWts",
          rating:57,
          votes:20,
          genres:["Action","Adventure","SI-Fi"],
          language:"English",
          duration:"2h 45min",
          releaseDate:"20-1-2021"
        },{
          id:6,
          name:"Spider-Man: No Way Home",
          poster:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
          trailer:"https://youtu.be/5tMBgBqpWts",
          rating:57,
          votes:20,
          genres:["Action","Adventure","SI-Fi"],
          language:"English",
          duration:"2h 45min",
          releaseDate:"20-1-2021"
        },{
          id:7,
          name:"Spider-Man: No Way Home",
          poster:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
          trailer:"https://youtu.be/5tMBgBqpWts",
          rating:57,
          votes:20,
          genres:["Action","Adventure","SI-Fi"],
          language:"English",
          duration:"2h 45min",
          releaseDate:"20-1-2021"
        }
      ]);
    return (
        <div className='movie-container'>
            {movieList.map(({ id,name,poster,rating,votes,genres }) => 
      <Movie 
      watchbtn={<Button variant='outlined' className='delete' color='secondary'
      onClick={()=>history.push(`/movie/${id}`) }>Watch-Movie</Button> }
      key={id} name={name} poster={poster} rating={rating} votes={votes} genres={genres} />)}
        </div>
    );
}
