import { Button } from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { AdminMovie } from './AdminMovie';
import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";

export function AdminMovieList() {
  const get=()=>{
    fetch("https://61c41708f1af4a0017d992ac.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mvi)=>setMovieList(mvi))
  }
  const del=(id)=>{
    fetch(`https://61c41708f1af4a0017d992ac.mockapi.io/movies/${id}`,{ method:'DELETE',}).then((data)=>data.json()).then(()=>get());
  }
  const [movieList,setMovieList]=useState([]);
  const history=useHistory();
   useEffect(get,[]);
  return (
    <div className='movie-container'>
      {movieList.map(({ id,name,poster,rating,votes,genres }) => 
      <AdminMovie 
     
      deletButton={<Button className='delete' color='error'
        onClick={() =>del(id) 
        }><DeleteForeverTwoToneIcon /></Button>}
        
        editbtn={<Button className='delete' color='secondary'
        onClick={() =>history.push(`/update/movies/${id}`) }><ModeEditOutlineOutlinedIcon /></Button> }
      key={id} name={name} poster={poster} rating={rating} votes={votes} genres={genres} />)}
    </div>
  );
}
