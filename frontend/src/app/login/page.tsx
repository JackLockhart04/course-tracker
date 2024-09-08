"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const [attemptedLogin, setAttemptedLogin] = useState(false);
  const handleLogin = async () => {
    const successfulLogin = await login(loginUsername, password);
    if (successfulLogin) router.push("/");
    else setAttemptedLogin(true);
  };

  return (
    <div className="grow flex justify-center items-center">
      <div className="max-w-xs">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-3 py-2 mb-3 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-3 py-2 mb-3 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-500"
        >
          Login
        </button>
        {attemptedLogin && (
          <p className="text-red-500 text-center">
            Invalid username or password
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
