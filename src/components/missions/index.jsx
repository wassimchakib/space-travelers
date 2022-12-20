import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/missionsSlice';

import './styles.css';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const missions = useSelector((state) => state.missionsReducer.missions);
  const missionsList = missions.map(
    ({ description, mission_id: missionId, mission_name: missionName }) => (
      <tr key={missionId}>
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
    ),
  );
  return (
    <section>
      <div className="container">
        <table className="table-container">
          <thead id="thead">
            <tr>
              <th className="th">Missions</th>
              <th className="th">Description</th>
              <th className="th">Status</th>
              <th className="th" aria-label="empty-table-head" />
            </tr>
          </thead>
          <tbody>{missionsList}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Missions;
