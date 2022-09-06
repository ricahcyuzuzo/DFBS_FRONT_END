import { RESET_CURRENCIES, SET_CURRENCIES } from "../actions/currencies";

const initialState = {
  currencies: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCIES:
      return { ...state, currencies: action.payload };
    case RESET_CURRENCIES:
      return {
        currencies: [],
      };

    default:
      return state;
  }
};

export default user;
