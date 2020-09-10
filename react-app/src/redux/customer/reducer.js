import { GET_CUSTOMERS } from '../types';

const initialState = {
  customers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    default:
      return state;
  }
};
