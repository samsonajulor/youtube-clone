// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB42Vo72Hji9hy8Ng5mG0FK-8ItjvkjeKM",
  authDomain: "mini-video-streamer.firebaseapp.com",
  projectId: "mini-video-streamer",
  storageBucket: "mini-video-streamer.appspot.com",
  messagingSenderId: "335211129913",
  appId: "1:335211129913:web:b29a08926a5a2b960271e8",
  measurementId: "G-9K1RK96QRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);