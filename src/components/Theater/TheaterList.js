import React from 'react'
import { useEffect, useState } from "react";
import{Theater} from './Theater'
import "./Theater.css"


export function TheaterList() {

    const [theaterList,setTheaterList]=useState([
        {
           name:"Cinepolis: Binnypet Mall",
           timmings: ["11:40AM","02:50PM","06:00PM"]
        },{
            name:"Cinepolis: Binnypet Mall",
            timmings: ["11:40AM","02:50PM","06:00PM"]
         },{
            name:"Cinepolis: Binnypet Mall",
            timmings: ["11:40AM","02:50PM","06:00PM"]
         }
    ]);

 return (
        <div className='theaterlist'>
            <h1>Theaters List</h1>
            {theaterList.map(({ name,timmings}) => 
      <Theater name={name} timmings={timmings} />)}
        </div>
    );
 }
