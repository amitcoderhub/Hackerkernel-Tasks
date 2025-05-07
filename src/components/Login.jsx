// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginData = { email, password };

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1", 
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); 
        navigate("/home");
      } else {
        alert("Invalide email or password.");
      }
    } catch (err) {
      console.error("Here is the Login failed:", err);
      alert("Something is wrong. Please try again leter.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-96 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
