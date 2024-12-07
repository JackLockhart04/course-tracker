import React from "react";

import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <header className="homeHeader">
        <h1>Welcome to Course Tracker</h1>
        <p>Your personal assistant to track assignments and grades</p>
      </header>
      <section className="homeContent">
        <div className="homeFeature">
          <h2>Track Assignments</h2>
          <p>Keep track of all your assignments and their due dates.</p>
        </div>
        <div className="homeFeature">
          <h2>Monitor Grades</h2>
          <p>Stay updated with your grades and performance in each course.</p>
        </div>
        <div className="homeFeature">
          <h2>Organize Courses</h2>
          <p>Manage all your courses in one place.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
