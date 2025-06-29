import illustration from "../assets/Illustration.png";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";

function Landing() {
  return (
    <div className="flex flex-col mx-10 gap-10 md:mx-32 md:flex-row items-center justify-between mt-32">
      <div>
        <h1 className="text-xl md:text-4xl font-bold">
          <span className="block">Find a job that suits</span>
          <span>your interest & skills.</span>
        </h1>
        <p className="text-xs md:text-base text-gray-500 mt-4">
          Your dream job is just a few clicks away.
        </p>
        <p className="text-xs md:text-base text-gray-500">
          Browse thousands of jobs matching your skills and interests.
        </p>
        <Link to="/jobs">
          <button className="text-lg cursor-pointer mt-4 flex flex-row gap-1 items-center justify-center text-white border-1 px-4 py-2 rounded-lg border-blue-500 bg-blue-500 font-medium">
            <Send size={18} />
            Get Jobs
          </button>
        </Link>
      </div>
      <img src={illustration} alt="Illustration" />
    </div>
  );
}

export default Landing;
