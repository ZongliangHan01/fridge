// const { getAuth, createUserWithEmailAndPassword } =require( "firebase/auth");
import { auth, db } from "../../configs/firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const register = (req, res) => {
//   console.log(req.body);
      createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
      .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      res.send("register user!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.send(errorMessage);
    });
};

const signIn = async (req, res) => {
  res.send("sign in user!");
};

const signOut = async (req, res) => {
  res.send("sign out user!");
};

const getProfile = async (req, res) => {
  res.send("get user profile!");
};

const updateProfile = async (req, res) => {
  res.send("update user profile!");
};

export default {
  register,
  signIn,
  signOut,
  getProfile,
  updateProfile,
};
