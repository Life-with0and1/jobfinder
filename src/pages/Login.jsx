import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../components/ContexProvider";

function Login() {
  const { login } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://jobfinder-backendd-q3p8dv2ol-ayushkumar013s-projects.vercel.app/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

        if (res.ok) {
          const userToLogin = Array.isArray(data.user)
            ? data.user[0]
            : data.user;
          login(userToLogin);
          navigate("/");
        
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen rounded shadow-2xl">
      <div className="flex flex-col gap-8 bg-white rounded px-4 md:px-10 py-4 md:py-10">
        <h1 className="text-center text-2xl font-bold text-blue-500">Login</h1>
      <form className="flex-col flex gap-5" onSubmit={handleLogin}>
  <input
    className="rounded-full border-2 outline-none text-blue-500 border-blue-100 text-md px-3 md:px-3 md:py-2 py-1"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    className="rounded-full border-2 outline-none text-blue-500 border-blue-100 text-md px-3 md:px-3 md:py-2 py-1"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <button
    type="submit"
    className="rounded-full bg-blue-500 cursor-pointer text-white text-md font-semibold px-3 py-2 md:mb-0 mb-5"
  >
    Login
  </button>
</form>

<p className="text-sm text-center text-gray-600">
  Don&apos;t have an account?{" "}
  <span
    onClick={() => navigate("/signup")}
    className="text-blue-500 hover:underline cursor-pointer"
  >
    Sign up
  </span>
</p>

      </div>
    </div>
  );
}

export default Login;
