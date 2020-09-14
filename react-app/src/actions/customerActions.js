import http from "../http-common";
import {
  SET_LOADING,
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  GET_CUSTOMER,
  // SET_CURRENT_CUSTOMER,
} from "./customerTypes";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getCustomers = () => async (dispatch) => {
  try {
    setLoading();

    const res = await http.get("/customers");
    dispatch({ type: GET_CUSTOMERS, payload: res.data });
  } catch (err) {
    console.log("Error");
  }
};

export const addCustomer = () => async (dispatch) => {
  try {
    setLoading();

    const res = await http.create("/customers");
    dispatch({ type: ADD_CUSTOMER, payload: res.data });
  } catch (err) {
    console.log("Error");
  }
};

// export const getCustomer = (id) => async (dispatch) => {
//   try {
//     // console.log(id);
//     const res = await http.get(`/customers/${id}`);
//     dispatch({ type: GET_CUSTOMER, payload: res.data });
//   } catch (err) {
//     console.log(err.response.msg);
//   }
// };
// export const setCustomerId = (id) => ({
//   type: SET_CURRENT_CUSTOMER,
//   payload: id,
// });

// export const getCustomer = (dispatch) => {
//   return async (id) => {
//     const res = await http.get(`/customers/${id}`);
//     dispatch({ type: GET_CUSTOMER, payload: res.data });
//   };
// };

// //Delete Customer
// export const deleteCustomer = (id) => async (dispatch) => {
//   try {
//     await instance.delete(`/api/customers/${id}`);
//     dispatch({ type: DELETE_CUSTOMER, payload: id });
//   } catch (err) {
//     dispatch({ type: CUSTOMER_ERROR, payload: err.response.msg });
//   }
// };

// const getAll = () => {
//   return http.get('/customers');
// };

// const get = (id) => {
//   return http.get(`/customers/${id}`);
// };

// const create = (data) => {
//   return http.post('/customers', data);
// };

// const update = (id, data) => {
//   return http.put(`/customers/${id}`, data);
// };

// const remove = (id) => {
//   return http.delete(`/customers/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/customers`);
// };
