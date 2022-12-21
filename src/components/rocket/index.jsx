import PropTypes from 'prop-types';
import ReserveBtn from '../reservebtn';
import './rocket.css';

const Rocket = ({ rocket }) => {
  const {
    id, images, name, description,reserved
  } = rocket;

  return (
    <div className="rocket">
      <img className="rocket__image" src={images[Math.floor(Math.random() * images.length)]} alt={name} />
      <div className="rocket__info">
        <h2>{name}</h2>
        <p>
          {reserved && <span className="rocket__reserved">Reserved</span>}
          {description}</p>
        <div>
          <ReserveBtn reserved={reserved} id={id} />
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
