// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg_zfcXaKnK0eGp-Ozo5jcF-o5lHqp2UQ",
  authDomain: "testimonials-app-c7898.firebaseapp.com",
  projectId: "testimonials-app-c7898",
  storageBucket: "testimonials-app-c7898.firebasestorage.app",
  messagingSenderId: "312224502880",
  appId: "1:312224502880:web:7068a58a3a5a0442815f05",
  measurementId: "G-8236QP1H17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the db for use in other files
export { db };
