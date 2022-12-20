import PropTypes from 'prop-types';
import './rocket.css';

const Rocket = ({ rocket }) => {
  const {
    id, images, name, description,
  } = rocket;
  return (
    <div className="rocket">
      <img className="rocket__image" src={images[Math.floor(Math.random() * images.length)]} alt={name} />
      <div className="rocket__info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
          <button className="rocket__reserve" type="button" id={id}>
            Reserve Rocket
          </button>
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
    images: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
