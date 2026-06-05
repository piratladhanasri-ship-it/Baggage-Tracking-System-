import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🧳 Baggage Tracker</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Track Baggage</Link>
        <Link to="/">Lost & Found</Link>
        <Link to="/">Travel History</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;