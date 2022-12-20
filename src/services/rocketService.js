import axios from 'axios';

export default class RocketService {
  static fetchRockets = async () => {
    const API_URL = 'https://api.spacexdata.com/v3/rockets';
    const result = await axios.get(API_URL).then((result) => result.data);
    return result;
  };
}
