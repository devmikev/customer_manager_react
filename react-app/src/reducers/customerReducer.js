import {
  SET_LOADING,
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
  GET_CUSTOMER,
  SET_CURRENT_CUSTOMER,
  SEARCH_CUSTOMERS,
  SET_SEARCH_TEXT,
} from "../actions/customerTypes";

const initialState = {
  customers: [],
  current: null,
  loading: false,
  filtered: null,
  searchText: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
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
    // case SEARCH_CUSTOMERS:
    //   return {
    //     ...state,
    //     filtered:
    //       state.searchText === ""
    //         ? state.customers
    //         : state.customers.filter((customer) => {
    //             customer.firstName.includes(state.searchText) ||
    //               customer.lastName.includes(state.searchText);
    //           }),
    //   };
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

    case UPDATE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.map((customer) =>
          customer.id === action.payload.id ? action.payload : customer
        ),
      };

    default:
      return state;
  }
};
