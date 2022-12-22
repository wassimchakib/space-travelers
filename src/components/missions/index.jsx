import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/missionsSlice';
import Mission from './mission';

import './styles.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer.missions);

  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, [dispatch, missions.length]);

  const missionsList = missions.map(({ missionId, missionName, description, joinedMission }) => (
    <Mission
      key={missionId}
      missionId={missionId}
      missionName={missionName}
      description={description}
      joinedMission={joinedMission}
    />
  ));

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
