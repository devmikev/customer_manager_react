import http from '../../http-common';
import { GET_CUSTOMERS } from '../types';

const getAll = () => {
  return http.get('/customers');
};

export const getCustomers = () => async (dispatch) => {
  try {
    const res = await http.get('/customers');
    dispatch({ type: GET_CUSTOMERS, payload: res.data });
  } catch (err) {
    console.log(err.response.msg);
  }
};
