import http from "../http-common";
import {
  GET_CUSTOMERS,
  GET_CUSTOMER,
  SET_CURRENT_CUSTOMER,
} from "./customerTypes";

const getAll = () => {
  return http.get("/customers");
};

export const getCustomers = () => async (dispatch) => {
  try {
    const res = await http.get("/customers");
    dispatch({ type: GET_CUSTOMERS, payload: res.data });
  } catch (err) {
    console.log(err.response.msg);
  }
};

export const setCustomerId = (id) => ({
  type: SET_CURRENT_CUSTOMER,
  payload: id,
});

export const getCustomer = (id) => async (dispatch) => {
  try {
    // console.log(id);
    const res = await http.get(`/customers/${id}`);
    dispatch({ type: GET_CUSTOMER, payload: res.data });
  } catch (err) {
    console.log(err.response.msg);
  }
};

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
