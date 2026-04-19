let activeToken = null;

const setToken = (token) => {
  activeToken = token;
};

const getToken = () => {
  return activeToken;
};

const clearToken = () => {
  activeToken = null;
};

module.exports = {
  setToken,
  getToken,
  clearToken,
};
