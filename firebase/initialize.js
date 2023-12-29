// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYREFkZ5-A3cx-1I22eNxNe_W5aEWRbDg",
  authDomain: "baba-haridas-finance.firebaseapp.com",
  projectId: "baba-haridas-finance",
  storageBucket: "baba-haridas-finance.appspot.com",
  messagingSenderId: "669071206347",
  appId: "1:669071206347:web:6d06eed4b1858bc217b84e",
  measurementId: "G-E0G1SF7VWW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.exports = analytics;