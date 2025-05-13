import { Link } from "react-router";

export default function NavBar() {
  return (
    <div className="container">
      <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/players">All Players</Link>
    <Link to="/addplayer">Add Player</Link>
    </div>
    </div>
  )
}