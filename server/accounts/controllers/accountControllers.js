// const { getAuth, createUserWithEmailAndPassword } =require( "firebase/auth");
import { auth, db } from "../../configs/firebaseConfig.js";
import {doc, setDoc} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import User from "../models/User.js";

const register = async (req, res) => {
    //   console.log(req.body);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
      const userId = userCredential.user.uid;
      const user = {
        email: req.body.email,
        name: req.body.name,
      };
      // const user = new User(req.body.email, req.body.name);
      await setDoc(doc(db, 'users', userId), user);
      res.send("register user!");
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }
    
};

const signIn = async (req, res) => {
  signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      res.send("sign in user!");
      // res.send(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.send(errorMessage);
    });
};

const signOut = async (req, res) => {
    signOut(auth)
    .then(() => {
      res.send("sign out user!");
    })
    .catch((error) => {
      res.send(error.message);
    });
};

const getCurrUser = async (req, res) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      res.send(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
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
  getCurrUser,
};
