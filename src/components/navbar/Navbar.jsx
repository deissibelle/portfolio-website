import "./navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* <img src={logo} alt="" className="logo" /> */}
      <ul className="navbar-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <button className="nav-connect">Contact with me</button>
    </div>
  );
}