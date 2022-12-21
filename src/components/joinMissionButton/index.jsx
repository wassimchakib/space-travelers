import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from '../../redux/missions/missionsSlice';
import './joinMissionButton.css';

const JoinMissionButton = ({ joinedMission, missionId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(joinMission(missionId));
  };
  const missionStatusClass = joinedMission ? 'leave-missioin-btn' : 'join-mission-btn';

  return (
    <button className={`${missionStatusClass}`} type="button" onClick={handleClick}>
      {joinedMission ? 'Leave Mission' : 'Join Mission'}
    </button>
  );
};

JoinMissionButton.propTypes = {
  joinedMission: PropTypes.bool.isRequired,
  missionId: PropTypes.string.isRequired,
};

export default JoinMissionButton;
