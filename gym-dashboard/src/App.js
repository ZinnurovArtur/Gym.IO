import { useEffect, useState } from "react";
import React from "react";

import SignIn from "./componets/Signin/SignIn";
import Navigation from "./componets/Navigation/Navigation";
import Dashboard from "./componets/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import ThemeContext from "./contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="md:container md:mx-auto">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route
              path="/dashboard"
              element={
                <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                  <div className="flex flex-row">
                    <Navigation />
                    <Dashboard />
                  </div>
                </ThemeContext.Provider>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
