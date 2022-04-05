import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Initialize Firebase app
// const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

// Email and Password Signup

// const auth = app.auth();
// const db = app.firestore();
// const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    // const res = await auth.signInWithPopup(googleProvider);
    // const user = res.user;
    // const query = await db
    //   .collection("users")
    //   .where("uid", "==", user.uid)
    //   .get();
    // if (query.docs.length === 0) {
    //   await db.collection("users").add({
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //   });
    // }
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user.displayName);
    console.log(user.email);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signIn = async (email, password) => {
  try {
    const foundUser = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const whoIsIn = async () => {
  try {
    const foundUser = auth.currentUser.email;
    // console.log(foundUser);
    alert(foundUser);
  } catch (err) {
    alert(err);
  }
};
const logout = () => {
  auth.signOut();
  alert("User Signed Out");
};

export {
  auth,
  //   db,
  signInWithGoogle,
  signIn,
  registerWithEmailAndPassword,
  whoIsIn,
  //   sendPasswordResetEmail,
  logout,
};
