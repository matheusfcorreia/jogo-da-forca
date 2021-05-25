import axios from 'axios';
import environment from 'environment';

const api = axios.create({ baseURL: environment.API_DOMAIN });
// const api = axios.create({ baseURL: 'http://localhost:3010' });

export const RequestPostLogs = async data => await api.post(`/api/logs`, data);

export const RequestGetWord = async () => await api.get(`/api/word`);
