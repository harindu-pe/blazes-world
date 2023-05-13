import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);
