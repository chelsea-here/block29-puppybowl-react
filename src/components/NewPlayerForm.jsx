import axios from "axios"
import { Link } from "react-router"

export default function NewPlayerForm({setAllPlayers, allPlayers}) {
  console.log("new player form is running")
  const addPlayer = async (formData) => {
    try {
      console.log("addPlayer Fn")
      const newPlayer = {
        name: formData.get("name"),
        breed: formData.get("breed"),
        status: formData.get("status"),
        imageUrl: formData.get("imageUrl"),
        teamId: formData.get("teamId")*1,
      }
      console.log(newPlayer);
      const data = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-AM/players", newPlayer);
      console.log(data);
      setAllPlayers([...allPlayers, data])
    }
    catch (error) {
      console.error(error)
    }
  }

  return (

    <div>
      <h2>Invite a Player:</h2>
      <form action={addPlayer}>
        <label>Name: <input required type="text" name="name"></input></label>
        <br />
        <label>Breed: <input required type="text" name="breed"></input></label>
        <br />
        <label>Status: 
          <select name="status">
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>
        <br />
        <label>Image URL: <input type="url" name="imageUrl"></input></label>
        <br />
        <label>Team ID: <input type="number" name="teamId" required></input></label>
        <br />
        <button>Submit</button>
      </form>
      <Link to="/players">Back to All Players</Link>
    </div>
  )
}