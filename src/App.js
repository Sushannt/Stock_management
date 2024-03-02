import React from "react";
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

//pages
import Dashboard from "./pages/Dashbaord";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
