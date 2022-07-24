import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./componets/Dashboard";
import NavigationLayaout from "./componets/Navigation/NavigationLayaout";
import SignIn from "./componets/Signin/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
import ThemeContext from "./contexts/ThemeContext";
import Body from "./componets/BodyAnalytics/Body";
import User from "./componets/UserPage/User";

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
                <Route path="body" element={<Body />} />
                <Route path="excersicelist" element={<div>list</div>} />
                <Route path="editworkout" element={<div>edit</div>} />
                <Route path="user" element={<User />} />
              </Route>
            </Routes>
          </ThemeContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
