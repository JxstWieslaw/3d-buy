import { Buffer } from "buffer";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Configurator from "./screens/Configurator.jsx";
import LandingPage from "./screens/LandingPage.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import Activate from "./screens/Activate.jsx";
import Private from "./screens/Private.jsx";
import Admin from "./screens/Admin.jsx";
import ForgetPassword from "./screens/ForgetPassword.jsx";
import ResetPassword from "./screens/ResetPassword.jsx";
import "react-toastify/dist/ReactToastify.css";
import { isAuth } from "./helpers/auth";
// global.Buffer = Buffer;
 const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/configurator" exact element={<Configurator />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route
            path="/users/password/forget"
            exact
            element={<ForgetPassword />}
          />
          <Route
            path="/users/password/reset/:token"
            exact
            element={<ResetPassword />}
          />
          <Route path="/users/activate/:token" exact element={<Activate />} />
          <Route
            path="/private"
            exact
            element={isAuth() ? <Private /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/admin"
            exact
            element={isAuth() && isAuth().role === 'admin' ? <Admin /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

