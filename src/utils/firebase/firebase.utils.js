import { initializeApp } from "firebase/app";
import { useEffect } from "react";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc, //retrieve docs from firestore
  getDoc, //get document data
  setDoc, //set document data
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI8TgrTdrI6DB3Cy3AYVGam5pLowBdOnc",

  authDomain: "crwn-clothing-c9e4e.firebaseapp.com",

  projectId: "crwn-clothing-c9e4e",

  storageBucket: "crwn-clothing-c9e4e.appspot.com",

  messagingSenderId: "421196620423",

  appId: "1:421196620423:web:926bc8f1bb549630d9ce22",

  measurementId: "G-TKG70PQEXW",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//set up new google provider from googleauthprovider class
const GoogleProvider = new GoogleAuthProvider();

//set the popup prompt
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
//export function for sing in with popup function
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);

//export function for signin with google redirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, GoogleProvider);

//connect to firestire db
export const db = getFirestore();

//store data from authentication within firestore
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  //check if user data excists within document
  if (!userSnapShot.exists()) {
    //set document with data from user auth/user snap shot
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const singInUsingEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  
};

export const signOutUser = async () => await signOut(auth);


export const onAuthStateChangedListener =  (callback) =>{
  return onAuthStateChanged(auth,callback)
}