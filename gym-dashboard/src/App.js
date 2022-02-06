import { useEffect, useState } from "react";
import React from "react";

import SignIn from "./componets/Signin/SignIn";
import Navigation from "./componets/Navigation/Navigation";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="md:container md:mx-auto">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/navigation" element={<Navigation />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
