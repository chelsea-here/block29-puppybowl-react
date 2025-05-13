import { useParams, Link, useNavigate } from 'react-router'
import axios from 'axios'

export default function SinglePlayer({allPlayers, setAllPlayers}) {
  console.log("single player function is running")
  const params = useParams();
  const id = params.id*1;
  // console.log(params);
  const player = allPlayers.find((player) => {
    return player.id === id;
  })
  // console.log(player)
  const navigate = useNavigate();

  const deletePlayer = async (id) => {
    try {
      await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-AM/players/${id}`)
      const newPlayerList = ((player) => {
        allPlayers.filter(player.id !== id)
      })
      setAllPlayers(newPlayerList);
      alert('player has been deleted')
      navigate('/players')

  } catch (error) {
    console.error(error)
  }
}

  return (
    <div>
      { player ? (
        <div className='player' key={player.id}>
          <img src={player.imageUrl ? player.imageUrl : null} alt={player.name}/>
          <h3>{player.name}</h3>
          <p>{player.id}</p>
          <hr />
          <p>{player.breed}</p>
          <p className={player.status}>{player.status}</p>
          <br />
      <button onClick={() => {deletePlayer(player.id)}}>Delete</button>
        </div>
      ): ( <h3>Loading...</h3>)}
      
     

      <Link to='/players'>Back to all players</Link>
   
    </div>
  )
}