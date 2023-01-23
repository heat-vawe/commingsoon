import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBecE6DssX1lEIuI3Kxp7sXDqJ39SXQ9ko",
    authDomain: "heat-vawe.firebaseapp.com",
    projectId: "heat-vawe",
    storageBucket: "heat-vawe.appspot.com",
    messagingSenderId: "617152663535",
    appId: "1:617152663535:web:9cc9d7ef81e955ce22b01a",
    measurementId: "G-XG06TG6PMN"
  };

const app= initializeApp(firebaseConfig)
export const db = getFirestore(app);