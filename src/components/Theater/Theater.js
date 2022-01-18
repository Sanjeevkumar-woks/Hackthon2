import React from 'react'
import "./Theater.css"
import { Button,Card } from '@mui/material';
import { useHistory} from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export function Theater({name,timmings}) {
    const history=useHistory();
    return (
        <div className='theater'>
            <div>      
            <h2><span><FavoriteBorderOutlinedIcon/>{name}</span></h2>
            </div>
            <div className='time'>
               <Button onClick={()=>history.push(`/seatselection`)} variant="outlined">{timmings[0]}</Button>
               <Button onClick={()=>history.push(`/seatselection`)} variant="outlined">{timmings[1]}</Button>
               <Button onClick={()=>history.push(`/seatselection`)} variant="outlined">{timmings[2]}</Button>
            </div>
        </div>
    )
}
