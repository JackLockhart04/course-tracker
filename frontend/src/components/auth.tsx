"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthObject {
  isLoggedIn: boolean;
  username: string | null;
  accountID: string | null;
  login: (loginUsername: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthObject | null>(null);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [accountID, setAccountID] = useState<string | null>(null);
  const router = useRouter();

  const login = async (
    loginUsername: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginUsername, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUsername(data.user.username);
        setAccountID(data.user.accountID);
        return true;
      } else {
        setUsername(null);
        setAccountID(null);
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error);
      setUsername(null);
      setAccountID(null);
      return false;
    }
  };

  const logout = () => {
    setUsername(null);
    setAccountID(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!username,
        username,
        accountID,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a MyProvider");
  }
  return context;
};
