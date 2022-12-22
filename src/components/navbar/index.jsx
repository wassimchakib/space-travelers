import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import './navbar.css';

const Navbar = () => (
  <header>
    <div className="container">
      <nav className="navbar">
        <div className="navbar__title">
          <img className="navbar__logo" src={logo} alt="planet-logo" />
          <h1>Space Travelers</h1>
        </div>
        <ul className="navbar__navigation">
          <li>
            <NavLink to="rockets" activeclassname="active">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="missions" activeclassname="active">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="profile" activeclassname="active">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
