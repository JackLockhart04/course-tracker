"use client";

import { useAuth } from "@/components/auth";

import NavigationButton from "@/components/navigationButton";

const Home = () => {
  const { username } = useAuth();
  return (
    <div className="grow flex flex-col justify-center items-center">
      <p>Home page</p>
      {username ? (
        <p>Welcome {username}</p>
      ) : (
        <div className="flex h-16 w-32">
          <NavigationButton label="Login" href="/login" />
        </div>
      )}
    </div>
  );
};

export default Home;
