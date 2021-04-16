const setTokenAndReload = (accessToken, historyPush) => {
  localStorage.setItem('accessToken', accessToken);
  historyPush('/portal/entregas-abertass');
};

export const setTokenOnBootstrap = (accessToken, historyPush) => {
  if (!localStorage.getItem('accessToken')) {
    if (accessToken !== null) {
      setTokenAndReload(accessToken, historyPush);
    } else if (!localStorage.getItem('accessToken')) {
      historyPush('/entrar');
    }
  } else if (accessToken !== null) {
    setTokenAndReload(accessToken, historyPush);
  }
};

export const holdUntilTokenIsValid = component => {
  if (localStorage.getItem('accessToken') === null) {
    return '';
  } else {
    return component;
  }
};

export const redirectOnTokenExpiration = historyPush => {
  localStorage.removeItem('accessToken');
  historyPush('/entrar');
};
