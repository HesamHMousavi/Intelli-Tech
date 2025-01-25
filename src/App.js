import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Process from "./Components/Pages/Process/Process";
import Example from "./Components/Pages/Example/Example";
import Packages from "./Components/Pages/Packages/Packages";
import Contact from "./Components/Pages/Contact/Contact";
import FAQS from "./Components/Pages/FAQS/FAQS";
import Project from "./Components/Pages/Project/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process" element={<Process />} />
        <Route path="/example" element={<Example />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
