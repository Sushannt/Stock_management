import React from "react";
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

// context
import { MasterContextProvider } from "./context/MasterContext";

//protect route
import ProtectRoute from "./components/ProtectRoute";

//pages
import Dashboard from "./pages/Dashbaord";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <MasterContextProvider>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="" element={<ProtectRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </MasterContextProvider>
  );
};

export default App;
