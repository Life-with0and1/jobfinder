import { useEffect, useState } from "react";

function DemandSkills() {
  const [topSkills, setTopSkills] = useState(["React", "Python"]);

  useEffect(() => {
    const fn = async () => {
      try {
        const res = await fetch(
          "https://jobfinder-backendd-q3p8dv2ol-ayushkumar013s-projects.vercel.app/api/jobs/demandingSkills",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();

        if (res.ok) {
          const skills = data.topSkills.map((skill) => skill[0].toUpperCase());
          setTopSkills(skills);
        }
      } catch (err) {
        console.error("Demanding skills error:", err);
      }
    };
    fn();
  }, []);

  return (
    <div className=" mt-32 md:mx-32 mx-10">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
        Most Demanding Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {topSkills.map((skill, index) => (
          <div
            key={index}
            className="text-sm md:text-lg bg-gray-200 text-black text-center py-2 rounded-lg  font-semibold shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DemandSkills;
