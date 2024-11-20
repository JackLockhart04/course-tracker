// src/App.tsx
import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Home from "./pages/home/home";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/stocksinseconds"
            element={<StocksInSeconds />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
