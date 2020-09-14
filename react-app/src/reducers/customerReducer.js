import {
  SET_LOADING,
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  // GET_CUSTOMER,
  SET_CURRENT_CUSTOMER,
} from "../actions/customerTypes";

const initialState = {
  customers: null,
  current: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
        loading: false,
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
        loading: false,
      };

    case SET_CURRENT_CUSTOMER:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

// case GET_CUSTOMER:
//   return {
//     ...state,
//     customer: action.payload,
//   };
