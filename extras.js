module.exports = {
  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },
  newUserCar: async (req, res, next) => {
    //req.body -create an instance of a new car
    const { userId } = req.params;
    //create a new car
    const newCar = new Car(req.body);
    //Get user
    const user = await User.findById(userId);
    //Assign user as a car's seller
    newCar.seller = user;
    //Save the car
    await newCar.save();
    //Add car to the user's selling array 'cars'
    user.cars.push(newCar);
    //Save User
    await user.save();
    res.status(201).json(newCar);
  },
};


router.route('/:userId')
    .get(validateParam(schemas.idSchema),UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser);




/*
We can interact with mongoose in 3 different ways:
1) Callbacks
2) Promises
3) [X]Async/Await(Promises)
*/

require("dotenv").config({
  path: "./config/config.env",
});
import fetch from "node-fetch";

module.exports = {
  getToken: async (idToken) => {
    const url = process.env.GOOGLE_VALIDATION_URL + idToken;
    const response = await fetch(url);
    return response;
  },

  validate: (idToken) => {
    return new Promise((resolve, reject) => {
      getToken(idToken).then(
        (response) => {
          if (isTokenOk(response.data)) {
            resolve(response.data);
          } else {
            reject({
              status: 401,
              message: "You do not have permission to access this resource.",
            });
          }
        },
        (error) => {
          console.log("--- status  " + error.response.status + " with idToken");
          console.log(idToken);
          reject({ status: 401, message: "Invalid google idToken." });
        }
      );
    });
  },

  isTokenOk: (payload)=> {
    return (
      payload &&
      new Date(payload.exp * 1000) > new Date() &&
      acceptableClientIDs.has(payload.aud) &&
      acceptableHds.has(payload.hd)
    );
  },

  acceptableHds : 
    new Set(["validDomain1.com", "validDomain2.com"
  ]),

  acceptableClientIDs : new Set([
      process.env.CLIENT_ID_WEB,
      ENV.CLIENT_ID_IOS,
      ENV.CLIENT_ID_ANDROID,
  ])
};

module.exports = {
  validate
};
