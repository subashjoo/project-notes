import React, { useState } from "react";
import Swal from "sweetalert2";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleClick(e) {
    e.preventDefault();
    console.log(e);
   if(username==='guna'&&password==='123') {
    Swal.fire({
      title: "Good job!",
      text: "correcct da botu",
      icon: "success",
    });
   }
   else{
    Swal.fire({
      title: "Error!",
      text: "Wrong creadentails",
      icon: "error",
      confirmButtonText: "matti",
    });
   }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-">
        <form
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
          onSubmit={(e) => handleClick(e)}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-amber-700">
            Login
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-amber-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-amber-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 transition-colors font-semibold">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
