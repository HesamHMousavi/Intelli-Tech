import { createContext, useReducer, useEffect } from "react";
import AdminReducer from "./AdminReducer";
import { SET_FEATURES, SET_PROJECTS } from "../../Types";
import axios from "axios";
// https://api.litwebs.co.uk/
axios.defaults.baseURL = "https://api.litwebs.co.uk/";

export const AdminContext = createContext();

export const AdminState = (props) => {
  const initialState = {
    Packages: [],
    FeaturesArray: [],
    Projects: [],
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

  // GET PROJECTS
  const GetProjects = async () => {
    try {
      const res = await axios.get("/project");
      dispatch({ type: SET_PROJECTS, payload: res.data.data });
    } catch (error) {
      console.log(error.messages);
    }
  };

  // ADD PROJECT
  const AddProject = async (Project) => {
    try {
      await axios.post("/project", { Project });
    } catch (error) {
      console.log(error);
    }
  };

  // Edit PROJECT
  const EditProject = async (Project) => {
    try {
      await axios.put("/project", { Project });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Project
  const DeleteProject = async (id) => {
    try {
      await axios.delete("/project", {
        headers: {
          id: id, // Send ID in headers
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Admin Login
  const AdminLogin = async (admin) => {
    try {
      const res = await axios.post("/admin-login", { admin });
      if (res.data.Token) {
        const decodedToken = JSON.parse(atob(res.data.Token.split(".")[1]));
        const expirationTime = decodedToken.exp * 1000;
        localStorage.setItem("token", res.data.Token);
        localStorage.setItem("tokenExpiration", expirationTime);
        window.location.href = "#/admin/data";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const AdminLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "#/admin/login";
  };

  const checkTokenExpiration = () => {
    const expiration = localStorage.getItem("tokenExpiration");
    if (expiration && Date.now() > expiration) {
      AdminLogout();
    }
  };

  useEffect(() => {
    checkTokenExpiration(); // Run immediately

    const interval = setInterval(checkTokenExpiration, 6000000);

    return () => clearInterval(interval);
  }, []); // Empty d

  return (
    <AdminContext.Provider
      value={{
        FeaturesArray: state.FeaturesArray,
        Projects: state.Projects,
        AdminLogout: AdminLogout,
        AdminLogin: AdminLogin,
        AddProject: AddProject,
        GetProjects: GetProjects,
        EditFeature: EditFeature,
        AddFeature: AddFeature,
        EditProject: EditProject,
        DeleteFeature: DeleteFeature,
        DeleteProject: DeleteProject,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
