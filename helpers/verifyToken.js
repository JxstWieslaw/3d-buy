require("dotenv").config({
  path: "./config/config.env",
});
const fetch = require("node-fetch");
const jwt_decode = require("jwt-decode");

module.exports = {
  validateToken: async (idToken) => {
    const response = jwt_decode(idToken);
    const error = await getToken(idToken);
    if (error === undefined && isTokenOk(response)) return true
    else return false
  },
};

const getToken = async (idToken) => {
  const url = process.env.GOOGLE_VALIDATION_URL + idToken;
  const { error } = await fetch(url);
  return error;
};

const isTokenOk = (payload) => {
  return (
    payload &&
    new Date(payload.exp * 1000) > new Date() &&
    acceptableClientID === payload.aud &&
    acceptableISS.has(payload.iss)
  );
};

const acceptableISS = new Set([
  "accounts.google.com",
  "https://accounts.google.com",
]);

const acceptableClientID = process.env.GOOGLE_CLIENT;

//Do error handling later
//  this.getToken(idToken)
//   getToken(idToken).then(
//     (response) => {
//       console.log("here")
//       if (isTokenOk(response.data)) {
//         resolve(response.data);
//       } else {
//         reject({
//           status: 401,
//           message: "You do not have permission to access this resource.",
//         });
//       }
//     },
//     (error) => {
//       console.log("--- status  " + error.response.status + " with idToken");
//       console.log(idToken);
//       reject({ status: 401, message: "Invalid google idToken." });
//     }
//   );
// });
