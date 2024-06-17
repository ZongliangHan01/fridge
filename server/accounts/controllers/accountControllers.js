import redisClient from "../../utils/redisClient.js";
import { auth, db } from "../../configs/firebaseConfig.js";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const register = async (req, res) => {
  //   console.log(req.body);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      req.body.email,
      req.body.password
    );
    const userId = userCredential.user.uid;
    const user = {
      email: req.body.email,
      name: req.body.name,
    };
    // const user = new User(req.body.email, req.body.name);
    await setDoc(doc(db, "users", userId), user);
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
      res.status(200).send(user.uid);
      // res.send(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(500).send(errorMessage);
    });
};

const logOut = async (req, res) => {
  signOut(auth)
    .then(() => {
      res.send("sign out!");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

const getCurrUser = async (req, res) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      res.send(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  console.log("get current user!");
};

const getProfile = async (req, res) => {
  const user = auth.currentUser;
  if (user) {
    try {
      const uid = user.uid;
      // Check cache
      const cacheData = await redisClient.get('profile:'+uid);
      if (cacheData) {
        return res.status(200).json(JSON.parse(cacheData));
      }

      // Get data from firestore
      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        res.status(200).json(userDoc.data());
        console.log("from firestore!")
        redisClient.setEx("profile:"+uid, 3600, JSON.stringify(userDoc.data()));
      } else {
        return res.status(404).send("User not found");
      }

      
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    return res.status(401).send("User is not signed in!");
  }
  console.log("get current user!");

  // res.send("get profile!");
};

const updateProfile = (req, res) => {
  console.log("update user profile!");
  // res.status(200).send("update user profile!");
};

export default {
  register,
  signIn,
  logOut,
  getProfile,
  updateProfile,
  getCurrUser,
};
