import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="navbar">
        <h2 className="nav-head"> Fruit site</h2>
        <Link to="/" className="menu" > Home </Link>
        <Link to="/about" className="menu" > About </Link>
        <Link to="/contact" className="menu" > Contact </Link>
        </div>
    );
}