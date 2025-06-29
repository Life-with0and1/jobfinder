import { Briefcase } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./ContexProvider";

function Navbar() {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <nav className="h-[90px] bg-white flex items-center w-full justify-between px-2 md:px-10">
      <div
        onClick={() => navigate("/")}
        className="flex gap-2 h-full items-center cursor-pointer"
      >
        <Briefcase size={40} color="#0A65CC" />
        <h1 className="text-3xl font-semibold hidden md:block">Jobpilot</h1>
      </div>
      <div className="flex gap-3">
        {user ? (
          <Link to="/profile">
            <button className="text-lg cursor-pointer text-blue-500 border-1 px-4 py-2 rounded-lg border-blue-500 font-medium">
              {user.name[0].toUpperCase()}
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="text-lg cursor-pointer text-blue-500 border-1 px-4 py-2 rounded-lg border-blue-500 font-medium">
              Login
            </button>
          </Link>
        )}
        {user ? null : (
          <Link to="/signup">
            <button className="text-lg cursor-pointer hidden md:flex text-white border-1 px-4 py-2 rounded-lg border-blue-500 font-medium bg-blue-500">
              Sign up
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
