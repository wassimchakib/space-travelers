import PropTypes from 'prop-types';

const Mission = ({ missionName, description }) => (
  <tr>
    <td className="td title-container">
      <h1 className="mission-title">{missionName}</h1>
    </td>
    <td className="td">{description}</td>
    <td className="td td-with-span">
      <span className="status-not-a-member">NOT A MEMBER</span>
    </td>
    <td className="td button-td">
      <button className="join-mission-btn" type="button">
        Join Mission
      </button>
    </td>
  </tr>
);

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
