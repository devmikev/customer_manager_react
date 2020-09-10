import http from '../http-common';

const getAll = () => {
  return http.get('/customers');
};

export default {
  getAll,
};
