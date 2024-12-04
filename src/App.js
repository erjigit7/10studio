import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FullScreenIframe from "./FullScreenIframe";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/panorama-home" element={<HomePage />} />
        <Route path="/panorama-3d-tour" element={<FullScreenIframe />} />
        <p>wertyuio</p>
      </Routes>
    </Router>
  );
};

export default App;
