import React from "react";
import { useParams } from "react-router-dom";

import "./course.css";

const Course: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  return (
    <div className="courseContainer">
      <h1>Course ID: {courseId}</h1>
    </div>
  );
};

export default Course;
