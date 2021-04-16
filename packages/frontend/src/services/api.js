import axios from 'axios';
import environment from 'environment';

const api = axios.create({ baseURL: environment.API_DOMAIN });

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    'Content-Type': 'application/json',
  },
});

export const getDeliveries = async query => {
  return await api.get(`/api/shippers/deliveries?${query}`, getHeaders());
};

export const validateInvitation = async token => {
  return await api(`/api/invitation/validate`, {
    method: 'get',
    headers: { authorization: `Bearer ${token}` },
  });
};

export const newSession = async data => await api.post('/api/session', data);
export const newShipper = async data => await api.post('/api/shippers', data);
export const putShipper = async (id, token, data) =>
  await api.put('/api/shippers/' + id, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const resetPassword = async data => await api.post('/api/resetpassword', data);
export const forgotPassword = async data => await api.post('/api/forgotpassword', data);

export const authenticatedShipper = async () => 
  await api.get('/api/shippers/authenticated', getHeaders());

export const getCarriers = async query => 
  await api.get(`/api/shippers/carriers?${query}`, getHeaders());