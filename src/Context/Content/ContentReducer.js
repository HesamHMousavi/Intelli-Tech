import { SET_CONTENT, SET_BASKET, SET_TOTAL, SET_ALERTS } from "../TYPES";
const AlertReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };

    case SET_CONTENT: {
      return {
        ...state,
        Content: action.payload,
      };
    }
    case SET_BASKET: {
      return {
        ...state,
        Basket: action.payload,
      };
    }
    case SET_TOTAL: {
      return {
        ...state,
        Total: action.payload,
      };
    }
    case SET_ALERTS: {
      return {
        ...state,
        Alerts: action.payload,
      };
    }
  }
};
export default AlertReducer;
