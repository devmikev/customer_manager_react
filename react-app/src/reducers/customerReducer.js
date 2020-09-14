import {
  GET_CUSTOMERS,
  GET_CUSTOMER,
  SET_CURRENT_CUSTOMER,
} from "../actions/customerTypes";

const initialState = {
  customers: [],
  currentCustomer: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };
    case SET_CURRENT_CUSTOMER:
      return {
        ...state,
        currentCustomer: action.payload,
      };
    case GET_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
      };
    default:
      return state;
  }
};
