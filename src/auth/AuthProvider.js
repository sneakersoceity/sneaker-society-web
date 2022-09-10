import { useState, useEffect } from "react";

import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Test User
    const testUser = {
      name: "Alanio",
      loggedIn: true,
    };

    // Get User from Firebase
    const currentUser = testUser;

    // Set that user as the CurrentUser
    setUser(currentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
