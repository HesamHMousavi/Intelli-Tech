import { createContext, useReducer, useEffect } from "react";
import AdminReducer from "./AdminReducer";
import { SET_FEATURES } from "../../Types";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_URI;

export const AdminContext = createContext();

export const AdminState = (props) => {
  const initialState = {
    Packages: [],
    FeaturesArray: [],
  };

  const [state, dispatch] = useReducer(AdminReducer, initialState);

  useEffect(() => {
    GetPackages();
    GetFeatures();
  }, []);

  const GetPackages = async () => {
    try {
      await axios.get("/service/all");
    } catch (error) {
      console.log(error.messages);
    }
  };

  const GetFeatures = async () => {
    try {
      const res = await axios.get("/feature/all");
      dispatch({ type: SET_FEATURES, payload: res.data.data });
    } catch (error) {
      console.log(error.messages);
    }
  };

  const EditFeature = async (edit, id) => {
    try {
      const newEdit = edit;
      await axios.put("/feature", { edit: newEdit, id });
    } catch (error) {
      console.log(error);
    }
  };

  const AddFeature = async (Feature) => {
    try {
      const res = await axios.post("/feature", { Feature });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteFeature = async (id) => {
    try {
      await axios.put("/feature/delete", { id });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        FeaturesArray: state.FeaturesArray,
        EditFeature: EditFeature,
        AddFeature: AddFeature,
        DeleteFeature: DeleteFeature,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
