import "./App.css";
import { Navbars } from "./Include/Navbars";
import { Routes, Route } from "react-router-dom";
import Login from "./Include/Login";
import AboutUs from "./Include/AboutUs";
import { Home } from "./Include/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}


export default App;
