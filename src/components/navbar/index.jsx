import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import './navbar.css';

const Navbar = () => (
  <div>
    <img src={logo} alt="planet-logo" />
    <h1>Space Travelers</h1>
    <ul>
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
  </div>
);

export default Navbar;
