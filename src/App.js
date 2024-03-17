import React from "react";
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

// context
import { MasterContextProvider } from "./context/MasterContext";

//protect route
import ProtectRoute from "./components/ProtectRoute";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";

//master
import Roles from "./pages/Master/Roles";
import Department from "./pages/Master/Department";

const App = () => {
  return (
    <MasterContextProvider>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="" element={<ProtectRoute />}>
            <Route path="/" element={<Home />}>
              <Route path="/dashboard" index={true} element={<Dashboard />} />
              {/* masters 🔽 */}
              <Route path="/role" element={<Roles />} />
              <Route path="/department" element={<Department />} />
            </Route>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </MasterContextProvider>
  );
};

export default App;
