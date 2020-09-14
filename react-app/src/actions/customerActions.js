import http from "../http-common";
import {
  SET_LOADING,
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  SET_CURRENT_CUSTOMER,
  UPDATE_CUSTOMER,
  SEARCH_CUSTOMERS,
  SET_SEARCH_TEXT,
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

export const addCustomer = (customer) => async (dispatch) => {
  try {
    setLoading();

    http.post("/customers", customer);
    dispatch({ type: ADD_CUSTOMER, payload: customer });
  } catch (err) {
    console.log("Error");
  }
};

export const setCurrent = (customer) => (dispatch) => {
  try {
    setLoading();

    dispatch({ type: SET_CURRENT_CUSTOMER, payload: customer });
  } catch (err) {
    console.log("Error");
  }
};

// export const searchCustomers = () => (dispatch) => {
//   try {
//     setLoading();

//     dispatch({ type: SEARCH_CUSTOMERS });
//   } catch (err) {
//     console.log("Error");
//   }
// };

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    await http.delete(`/customers/${id}`);
    dispatch({ type: DELETE_CUSTOMER, payload: id });
  } catch (err) {
    console.log("Error");
  }
};

export function updateCustomer(id, customer) {
  return (dispatch) => {
    console.log(customer);
    return http.put(`/customers/${id}`, customer).then((response) => {
      dispatch({ type: UPDATE_CUSTOMER, payload: customer });
    });
  };
}

// export const setSearchText = (text) => (dispatch) => {
//   try {
//     setLoading();

//     dispatch({ type: SET_SEARCH_TEXT, payload: text });
//   } catch (err) {
//     console.log("Error");
//   }
// };

export const setSearchText = (text) => (dispatch) => {
  try {
    setLoading();

    dispatch({ type: SET_SEARCH_TEXT, payload: text });
  } catch (err) {
    console.log("Error");
  }
};
