import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route  path="/about" element={<AboutPage />} />
          <Route path="/singleshow/:id" element={<SinglePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
