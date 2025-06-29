import { Briefcase } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-32 bg-gray-900 text-gray-300 rounded-t-2xl">
      <div className="py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex gap-2 h-full items-center">
            <Briefcase size={30} color="#0A65CC" />
            <h1 className="text-3xl font-semibold hidden md:block">Jobpilot</h1>
          </div>{" "}
          <p className="text-sm text-gray-400 max-w-sm ">
            Find your dream job with us. Remote, hybrid, or on-site — your
            career starts here.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h3 className="text-white font-semibold mb-2">Social</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 border-t border-gray-700 py-4 mt-2">
        © {new Date().getFullYear()} JobPilot. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
