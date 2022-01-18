import './App.css';
import React from "react";
import { Switch, Route} from "react-router-dom";
import { TopBar } from './components/Topbar/TopBar'
import {MinTopbar} from './components/Topbar/MinTopbar';
import { MovieList } from './components/Movies/MovieList';
import {MovieDetails} from './components/Movies/MovieDetails'
import { TheaterList} from './components/Theater/TheaterList'
import { AddMovies } from './Pages/AddMovie';
import { Seat } from './components/Theater/Seats/Seat';
import { AdminHome } from './Pages/AdminHome';



function App() {
  return (
    <div className="App">
   
        <Switch>
           <Route exact path="/">
            <TopBar/>
           <MinTopbar/>
           <MovieList />
          </Route>
          <Route path="/admin/home">
          <TopBar/>
           <MinTopbar/>
          <AdminHome/>
          </Route>
          <Route path="/movie/:id">
          <MovieDetails/>
          </Route>
          <Route path="/admin/addmovie">
           <AddMovies/>
          </Route>
           <Route path="/theatersList">
            <TheaterList/>
           </Route>
          <Route path="/seatselection">
            <Seat/>
          </Route> 
           <Route path="">
             
          
          </Route>
            
        </Switch>
    </div>
  );
}



export default App;
