import axios from 'axios';

class MissionService {
  static fetchMissions = async () => {
    try {
      const url = 'https://api.spacexdata.com/v3/missions';
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

export default MissionService;
