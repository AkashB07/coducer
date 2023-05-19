import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";


import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

const App = () =>  {

  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />}/>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePage/> } /> 
    </Routes>
  );
}

export default App;  
