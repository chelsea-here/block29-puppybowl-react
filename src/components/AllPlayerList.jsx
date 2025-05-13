import { Link, useNavigate } from 'react-router'

export default function AllPlayerList({allPlayers}) {
  console.log("All player List function is being run")

  const navigate = useNavigate();
  const searchForPlayer = (formData) => {
    const target = formData.get("searchBar").toLowerCase()
      navigate(`/players/search/?player=${target}`)
  }
  return (
    <div>
      <h2>Check out all of our players or <Link to="/addplayer">invite a new player</Link></h2>
      <h3>Search for a player by name here: </h3>
      <form action={searchForPlayer}>
        <input type="text" name="searchBar"></input>
        <button>Search</button>
      </form>
      <div>
        {allPlayers.map((player) => { 
          return (
            <div key={player.id}><Link to={`/players/${player.id}`}><h3>{player.name}</h3></Link>
            </div>
        )})}
      </div>
    </div>
  )
} 