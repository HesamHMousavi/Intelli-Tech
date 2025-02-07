import { SET_FEATURES } from "../../Types";
const AdminReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };

    case SET_FEATURES: {
      return {
        ...state,
        FeaturesArray: action.payload,
      };
    }
  }
};
export default AdminReducer;
