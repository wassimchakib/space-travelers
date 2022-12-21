import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rocketsSlice';
import './reservebtn.css';

const ReserveBtn = ({ id, reserved }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(reserveRocket(id));
  }
  return (
    <button
      className={ `rocket__btn ${reserved ? "rocket__cancel" : "rocket__reserve"}`}
      type="button"
      onClick={() => handleClick(id)}
    >
      {reserved ? "Cancel Reservation" : "Reserve Rocket" }
    </button>
  );
};

ReserveBtn.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default ReserveBtn;
