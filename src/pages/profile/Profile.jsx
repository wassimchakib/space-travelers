import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import ReserveBtn from '../../components/reservebtn';
import JoinMissionButton from '../../components/joinMissionButton';
import './profile.css';

const Profile = () => {
  library.add(faCircleInfo);

  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missionsReducer.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const joinedMissionsList = missions.filter((mission) => mission.joinedMission);
  const joinedMissions = joinedMissionsList.map((mission) => (
    <li key={mission.missionId} className="profile__mission">
      <span>
        {mission.missionName}
        <a
          href={mission.wikipedia}
          className="font-alert"
          target="_blank"
          rel="noreferrer"
          title="Read More"
        >
          <FontAwesomeIcon icon="fa-solid fa-circle-info" />
        </a>
      </span>
      <JoinMissionButton missionId={mission.missionId} joinedMission={mission.joinedMission} />
    </li>
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
                reservedRockets.map((rocket) => (
                  <li key={rocket.id} className="profile__rocket">
                    <span>
                      {rocket.name}
                      <a
                        href={rocket.wikipedia}
                        className="font-alert"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                      </a>
                    </span>
                    <ReserveBtn id={rocket.id} reserved={rocket.reserved} />
                  </li>
                ))
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
