"use client";

import { useAuth } from "@/components/auth";

const Profile = () => {
  const { username, accountID, logout } = useAuth();
  return (
    <div className="grow flex-col p-4 space-y-4">
      <p>Username: {username}</p>
      <p>AccountID: {accountID}</p>
      <button
        onClick={logout}
        className="h-16 w-24 flex justify-center items-center text-white rounded bg-blue-700 hover:bg-blue-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
