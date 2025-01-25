import { SET_CONTENT } from "../TYPES";
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
  }
};
export default AlertReducer;
