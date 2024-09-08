"use client";

import { useState, useEffect } from "react";

import { useAuth } from "@/components/auth";
import MainButtonWrapper from "@/components/mainButtonWrapper";
import CourseCard from "@/components/courseCard";

export default function Dashboard() {
  const { username, accountID } = useAuth();
  const [courseData, setCourseData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Change to use accountID eventually
    if (username) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:5000/courses/get?username=${username}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const result = await response.json();
          setCourseData(result);
        } catch (err) {
          const tempErr = err as Error;
          setError(tempErr.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grow flex-col">
      <p className="h-12 flex justify-center items-center">Dashboard</p>
      <div className="grow flex-col p-4 space-y-4">
        {courseData.map((course: any) => {
          const courseName = Object.keys(course)[0];
          const courseInfo = course[courseName];

          return (
            <CourseCard
              key={courseInfo.courseID}
              id={courseInfo.courseID}
              name={courseInfo.name}
              grade={courseInfo.grade}
            />
          );
        })}
        <div className="h-44 flex justify-center items-center bg-gray-200 rounded-lg">
          <MainButtonWrapper>
            <button className="grow">Add course</button>
          </MainButtonWrapper>
        </div>
      </div>
    </div>
  );
}
