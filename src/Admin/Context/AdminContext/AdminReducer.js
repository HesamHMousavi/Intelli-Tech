import { SET_FEATURES , SET_PROJECTS } from "../../Types";
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
    case SET_PROJECTS: {
      return {
        ...state,
        Projects: action.payload,
      };
    }
  }
};
export default AdminReducer;
