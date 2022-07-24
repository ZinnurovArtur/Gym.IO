import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./componets/Dashboard";
import Header from "./componets/Header";
import Navigation from "./componets/Navigation/Navigation";
import NavigationLayaout from "./componets/Navigation/NavigationLayaout";
import SignIn from "./componets/Signin/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="md:container md:mx-auto">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </AuthProvider>

        <div className="flex flex-row">
          <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <Routes>
              <Route element={<NavigationLayaout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="body" element={<div>loh</div>} />
              </Route>
            </Routes>
          </ThemeContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
