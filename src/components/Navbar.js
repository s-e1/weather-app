import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <h3 className="left">Weather App</h3>
            <div className="right">
                <Link to="/"><button>Home</button></Link>
                <Link to="/favorites"><button>Favorites</button></Link>
            </div>
        </div>
    );
}

export default Navbar;