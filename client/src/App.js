import { Buffer } from "buffer";

import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Configurator from "./screens/Configurator.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import Activate from "./screens/Activate.jsx";
import Private from "./screens/Private.jsx";
import Admin from "./screens/Admin.jsx";
import ForgetPassword from "./screens/ForgetPassword.jsx";
import ResetPassword from "./screens/ResetPassword.jsx";
import PrivateRoute from "./Routes/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute";
import "react-toastify/dist/ReactToastify.css";
import { isAuth } from "./helpers/auth";
// global.Buffer = Buffer;
 const App = () => {
  return (
    <>
    <h1>Hello</h1>
      <Router>
        <Routes>
          <Route path="/" exact element={<Configurator />} />
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

