// src/App.tsx
import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import Course from "./pages/course/course";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:courseId" element={<Course />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
