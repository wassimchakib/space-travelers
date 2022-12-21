import { useSelector } from 'react-redux';
import './profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missionsReducer.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const joinedMissionsList = missions.filter((mission) => mission.joinedMission);

  const joinedMissions = joinedMissionsList.map((mission) => (
    <li key={mission.missionId}>{mission.missionName}</li>
  ));

  return (
    <section className="profile">
      <div className="container">
        <div className="profile__content">
          <div className="profile__missions">
            <h2>My Missions</h2>
            <ul>{joinedMissionsList.length > 0 ? joinedMissions : <li>No Missions Joined</li>}</ul>
          </div>
          <div className="profile__rockets">
            <h2>My Rockets</h2>
            <ul>
              {reservedRockets.length > 0 ? (
                reservedRockets.map((rocket) => <li key={rocket.id}>{rocket.name}</li>)
              ) : (
                <li>No Rockets reserved</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
