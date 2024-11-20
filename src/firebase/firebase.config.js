// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq4PqDdztrymZ6xzenZarPE5MX0ucFgJU",
  authDomain: "lingo-bingo-56adb.firebaseapp.com",
  projectId: "lingo-bingo-56adb",
  storageBucket: "lingo-bingo-56adb.firebasestorage.app",
  messagingSenderId: "109604152527",
  appId: "1:109604152527:web:4d26775c89466199c9c3ba",
  measurementId: "G-ZF0Q22267L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;