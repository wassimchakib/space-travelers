import PropTypes from "prop-types";
import JoinMissionButton from "../../joinMissionButton";

const Mission = ({ missionName, description, missionId, joinedMission }) => {
  const statusClass = joinedMission ? "active-member" : "not-a-member";
  return (
    <tr>
      <td className="td title-container">
        <h1 className="mission-title">{missionName}</h1>
      </td>
      <td className="td">{description}</td>
      <td className="td td-with-span">
        <span className={`${statusClass} status`}>
          {joinedMission ? "Active Member" : "NOT A MEMBER"}
        </span>
      </td>
      <td className="td button-td">
        <JoinMissionButton
          missionId={missionId}
          joinedMission={joinedMission}
        />
      </td>
    </tr>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  joinedMission: PropTypes.bool.isRequired
};

export default Mission;
