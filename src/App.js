import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Process from "./Components/Pages/Process/Process";
import Example from "./Components/Pages/Example/Example";
import Packages from "./Components/Pages/Packages/Packages";
import Contact from "./Components/Pages/Contact/Contact";
import FAQS from "./Components/Pages/FAQS/FAQS";
import Project from "./Components/Pages/Project/Project";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Success from "./Components/Pages/Checkout/Success";
import AlertList from "./Components/util/Alert/AlertList";
import Data from "./Admin/Components/Data/Data";
import Services from "./Admin/Components/Services/Services";
import AdminProjects from "./Admin/Components/Clients/AdminProjects";
import Login from "./Admin/Components/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "./Admin/Components/ManageUsers/ManageUsers";

function App() {
  return (
    <Router>
      <>
        <AlertList />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/example" element={<Example />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/project" element={<Project />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/admin/login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route path="/admin/*" element={<PrivateRoute />}>
            <Route path="data" element={<Data />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="admins" element={<ManageUsers />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
