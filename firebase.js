// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo05gScapJabST0JfBCs_hOGWOwf8eXE8",
  authDomain: "flashcardsaas-1b7c5.firebaseapp.com",
  projectId: "flashcardsaas-1b7c5",
  storageBucket: "flashcardsaas-1b7c5.appspot.com",
  messagingSenderId: "372188403913",
  appId: "1:372188403913:web:4939f35a256996cf0bd518",
  measurementId: "G-HDX93F3LWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);