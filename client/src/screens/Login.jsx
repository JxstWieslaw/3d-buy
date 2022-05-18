import React, { useState } from "react";
import authSvg from "../assests/login.svg";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { authenticate, isAuth } from "../helpers/auth";
import { Link, Navigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" });

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password1: "",
    textChange: "Sign In",
  });
  const { email, password1, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const sendGoogleToken = (tokenId) => {
    console.log(tokenId);
    axios
      .post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
        idToken: tokenId,
      })
      .then((res) => {
        console.log(res.data);
        informParent(res);
      })
      .catch((error) => {
        console.log("GOOGLE SIGNIN ERROR", error.response);
      });
  };
  const informParent = (response) => {
    authenticate(response, () => {
      isAuth() && isAuth().role === "admin"
        ? history.push("/admin")
        : history.push("/private");
    });
  };

  const sendFacebookToken = (userID, accessToken) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/facebooklogin`, {
        userID,
        accessToken,
      })
      .then((res) => {
        console.log(res.data);
        informParent(res);
      })
      .catch((error) => {
        console.log("GOOGLE SIGNIN ERROR", error.response);
      });
  };
  const responseGoogle = (response) => {
    console.log(response);
    sendGoogleToken(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
    sendFacebookToken(response.userID, response.accessToken);
  };

  const handleSubmit = (e) => {
    console.log(process.env.REACT_APP_API_URL);
    e.preventDefault();
    if (email && password1) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          email,
          password: password1,
        })
        .then((res) => {
          authenticate(res, () => {
            setFormData({
              ...formData,
              email: "",
              password1: "",
              textChange: "Submitted",
            });
            isAuth() && isAuth().role === "admin"
              ? history.push("/admin")
              : history.push("/private");
            toast.success(`Hey ${res.data.user.name}, Welcome back!`);
          });
        })
        .catch((err) => {
          setFormData({
            ...formData,
            email: "",
            password1: "",
            textChange: "Sign In",
          });
          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {isAuth() ? <Navigate to="/" replace /> : null}
      <ToastContainer />
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Sign Into CodeVilla
            </h1>
            <div className="w-full flex-1 mt-8 text-indigo-500">
              <div className="flex flex-col items-center">
                <GoogleLogin
                  onSuccess={responseGoogle}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />

                {/* <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"></div>
                <div
                  id="spinner"
                  style={
                    ({ background: "#4267b2" },
                    { borderRadius: "5px" },
                    { color: "white" },
                    { height: "40px" },
                    { textAAlign: "center" },
                    { width: "250px" })
                  }
                >
                  <div
                    class="fb-login-button"
                    data-max-rows="1"
                    data-size="large"
                    data-button-type="continue_with"
                    data-use-continue-as="true"
                  ></div>
                </div> */}
                <FacebookLogin
                  appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
                  autoLoad={false}
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                    >
                      <div className=" p-1 rounded-full ">
                        <i className="fab fa-facebook" />
                      </div>
                      <span className="ml-4">Sign In with Facebook</span>
                    </button>
                  )}
                />
                <a
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                  href="/register"
                  target="_self"
                >
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2 text-indigo-500" />
                  <span className="ml-4">Sign Up</span>
                </a>
              </div>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign In with e-mail
                </div>
              </div>
              <form
                className="mx-auto max-w-xs relative "
                onSubmit={handleSubmit}
              >
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange("email")}
                  value={email}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange("password1")}
                  value={password1}
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <i className="fas fa-sign-in-alt  w-6  -ml-2" />
                  <span className="ml-3">Sign In</span>
                </button>
                <Link
                  to="/users/password/forget"
                  className="no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2"
                >
                  Forget password?
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
