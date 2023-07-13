import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEaldVwWqNubNWcP8-3q9gEEkAkBRnxQo",
  authDomain: "blazes-world.firebaseapp.com",
  projectId: "blazes-world",
  storageBucket: "blazes-world.appspot.com",
  messagingSenderId: "346874864206",
  appId: "1:346874864206:web:f7eef2990d30b00b54991f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
