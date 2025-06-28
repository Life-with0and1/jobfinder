import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error("Failed to parse user:", e);
      return null;
    }
  });

  const login = (userData) => {
    const user = Array.isArray(userData) ? userData[0] : userData;

    const {
      name,
      email,
      location,
      skills,
      isAvailableForJob,
      description,
      resumeLink,
      _id,
    } = user;

    const cleanUser = {
      name,
      email,
      location,
      skills,
      isAvailableForJob,
      description,
      resumeLink,
      _id,
    };

    setUser(cleanUser);
    localStorage.setItem("user", JSON.stringify(cleanUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Context.Provider value={{ user, login, logout }}>
      {children}
    </Context.Provider>
  );
};
