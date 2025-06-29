import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../components/ContexProvider";
import { ArrowLeft } from "lucide-react";

function Profile() {
  const { user,login, logout } = useContext(Context);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    password: "",
    skills: user.skills || [],
    description: user.description || "",
    isAvailableForJob: user.isAvailableForJob || false,
    location: user.location || "",
    resumeLink: user.resumeLink || "",
    socialLinks: {
      linkedin: user.socialLinks?.linkedin || "",
      github: user.socialLinks?.github || "",
      portfolio: user.socialLinks?.portfolio || "",
    },
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name.startsWith("socialLinks.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [key]: value },
      }));
    } else if (name === "isAvailableForJob") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSkillsChange = (e) => {
    const value = e.target.value;
    const skillsArray = value.split(",").map((skill) => skill.trim());
    setFormData((prev) => ({ ...prev, skills: skillsArray }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3000/api/user/update/${user._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        const userToLogin = Array.isArray(data.user)
            ? data.user[0]
            : data.user;
          login(userToLogin);
        alert("Profile updated successfully.");
        navigate("/");
      } else {
        alert(data.message || "Update failed.");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-row gap-1 items-center">
            <ArrowLeft onClick={()=>navigate("/")} color="#2B7FFF"  className="cursor-pointer"/>
             <h1 className="text-2xl font-semibold text-blue-600">
            Update Details
          </h1>
          </div>
         
          <button
            onClick={logout}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Logout
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleUpdate}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          
          <input
            value={formData.skills.join(", ")}
            onChange={handleSkillsChange}
            placeholder="Skills (comma separated)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Profile Description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            name="resumeLink"
            value={formData.resumeLink}
            onChange={handleChange}
            placeholder="Resume Link"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isAvailableForJob"
              checked={formData.isAvailableForJob}
              onChange={handleChange}
            />
            <label>Available for Job</label>
          </div>

          <input
            name="socialLinks.linkedin"
            value={formData.socialLinks.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            name="socialLinks.github"
            value={formData.socialLinks.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            name="socialLinks.portfolio"
            value={formData.socialLinks.portfolio}
            onChange={handleChange}
            placeholder="Portfolio URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
