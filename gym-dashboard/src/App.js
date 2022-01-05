import { useEffect, useState } from "react";
import React from "react"
import Home from "./componets/Home";
import SignIn from "./componets/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";

function App() {
  return(
    <div className="md:container md:mx-auto">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/signin" element={<SignIn/>} />
            </Routes>
          </AuthProvider>
        </Router>
    </div>


  )
}

export default App;
