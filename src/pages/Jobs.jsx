import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Fotter";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("https://remoteok.com/api");
        const data = await res.json();
        setJobs(data.slice(1));
        setFilteredJobs(data.slice(1));
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const titleMatch = job.position
        ?.toLowerCase()
        .includes(search.toLowerCase());
      const locationMatch = job.location
        ?.toLowerCase()
        .includes(location.toLowerCase());
      return titleMatch && locationMatch;
    });

    setFilteredJobs(filtered);
    setCurrentPage(1);
  }, [search, location, jobs]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by title or keyword"
            className="border px-4 py-2 rounded-full w-full md:w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by location"
            className="border px-4 py-2 rounded-full w-full md:w-1/3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Jobs */}
        <div className="mt-10 flex flex-col gap-6">
          {currentJobs.length === 0 ? (
            <p className="text-center text-gray-100">No jobs found.</p>
          ) : (
            currentJobs.map((job) => (
              <div
                key={job.id}
                className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-xl font-bold">{job.position}</h2>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-blue-500">{job.location}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-xl md:max-w-xs text-lg cursor-pointer mt-4 flex flex-row gap-1 items-center justify-center text-white border-1 px-4 py-2 rounded-lg border-blue-500 bg-blue-500 font-medium"
                >
                  View Job
                </a>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center mt-10 mb-20 px-4">
          <div className="flex flex-wrap gap-2 max-w-full">
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-3 py-1 rounded-full border bg-white text-blue-500"
              >
                Prev
              </button>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (pageNum) =>
                  pageNum === 1 ||
                  pageNum === totalPages ||
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
              )
              .map((pageNum, index, arr) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded-full border ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-3 py-1 rounded-full border bg-white text-blue-500"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Jobs;
