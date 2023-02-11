import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5OEJM5lJHKHIIUq2nF-UnNBcxFpva2AA",
  authDomain: "chatgpt-messenger-bd097.firebaseapp.com",
  projectId: "chatgpt-messenger-bd097",
  storageBucket: "chatgpt-messenger-bd097.appspot.com",
  messagingSenderId: "258683286420",
  appId: "1:258683286420:web:20185c5aefcfd4cf0ed581",
};

// Initialize Firebase
//this is fine with reactjs but not in nextjs
//const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
