import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skill from "./components/Skill"; // Import Skills component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Removed Home route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
    </Router>
  );
};

export default App;
