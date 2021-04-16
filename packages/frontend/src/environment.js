const environment = {
  API_DOMAIN: process.env.REACT_APP_API_DOMAIN,
  API_ACCESS_TOKEN: localStorage.getItem('accessToken'),
  LOGIN_URL: process.env.REACT_APP_DOMAIN + '/entrar/',
  APP_DOMAIN: process.env.REACT_APP_DOMAIN,
};

export default environment;
