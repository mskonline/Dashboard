import axios from 'axios';
import * as Constants  from '../constants/app-constants';

export const getWeatherUpdate = () => {
    return axios.get(Constants.Weather_API_Endpoint);
};