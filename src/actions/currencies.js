export const SET_CURRENCIES = "SET_CURRENCIES";
export const RESET_CURRENCIES = "RESET_CURRENCIES";

export const setCurrencies = (currencies) => (dispatch) => {
  dispatch({
    type: SET_CURRENCIES,
    payload: currencies,
  });
};

export const resetCurrencies = () => (dispatch) => {
  dispatch({
    type: RESET_CURRENCIES,
  });
};
