import axios from 'axios';

class MissionService {
  static fetchMissions = async () => {
    try {
      const url = 'https://api.spacexdata.com/v3/missions';
      const response = await axios.get(url);
      const newData = [];
      response.data.forEach((item) => {
        newData.push({
          missionName: item.mission_name,
          missionId: item.mission_id,
          description: item.description,
          joinedMission: false,
        });
      });
      return newData;
    } catch (error) {
      return error;
    }
  };
}

export default MissionService;
