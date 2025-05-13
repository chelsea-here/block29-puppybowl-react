import { useState, useEffect } from 'react'
import AllPlayerList from './components/AllPlayerList'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import Search from './components/Search'
import { Routes, Route } from 'react-router'
import axios from 'axios';
import './App.css'

function App() {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const {data} = await axios.get("https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-AM/players")
        setAllPlayers(data.data.players);
      } catch (error) {
        console.error(error);
      }
    } 
    fetchPlayers();
  
  }, [allPlayers])
 


  return (
    <>
    <NavBar />

    
    <Routes>
      <Route path='/' element={<AllPlayerList allPlayers={allPlayers} />}/>
      <Route path='/players' element={<AllPlayerList allPlayers={allPlayers} />}/>
      <Route path='/players/:id' element={<SinglePlayer allPlayers={allPlayers} setAllPlayers={setAllPlayers}/>}/>
      <Route path='/addplayer' element={<NewPlayerForm setAllPlayers={setAllPlayers} allPlayers={allPlayers}/>}/>
      <Route path='/players/search/?' element={<Search allPlayers={allPlayers} />}/>
    </Routes>
    
    </>
  )
}

export default App

//why am i getting constant state updates when I make allPlayers a dependency of useeffect?
//why am i getting a unique key is required for each item in a list for allplayers

//why 
