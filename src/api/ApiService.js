import axios from 'axios';

class ApiService {
  static fetchMissions = async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

export default ApiService;
