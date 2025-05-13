import { useSearchParams, Link, useNavigate } from "react-router";
import { useState, useEffect } from "react"

export default function Search ({allPlayers}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const nameSearch = searchParams.get("player")
  const navigate = useNavigate()
  console.log(nameSearch);

  useEffect(() => {
    const result = allPlayers.filter((player) => {
      return player.name.toLowerCase().includes(nameSearch)
    })
    console.log(result);
    setSearchResults(result);
  }, [allPlayers])

  const clearSearch = () => {
    setSearchResults([])
    navigate('/players')
  }
  return (
  <div>
    {searchResults.length > 0 ? searchResults.map((player) => { 
      return (
        <div key={player.id}><Link to={`/players/${player.id}`}><h3>{player.name}</h3></Link>
        </div>
    )}) : <p>No such player found</p>}
    <br />
    <button onClick={() => clearSearch()}>Clear Search Results</button></div>
  )
}