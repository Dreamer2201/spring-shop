import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBu35O6MY1viDl2dNa2NY2eiok-yFCmwP0",
  authDomain: "auth-example-ea50d.firebaseapp.com",
  projectId: "auth-example-ea50d",
  storageBucket: "auth-example-ea50d.appspot.com",
  messagingSenderId: "990983655612",
  appId: "1:990983655612:web:95e66d993644eefacb40b9"
};

console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);