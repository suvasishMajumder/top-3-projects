// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY8F-m1TVhqOu-s_67C9RwDNXPljEtD8Q",
  authDomain: "shopkart-408dc.firebaseapp.com",
  projectId: "shopkart-408dc",
  storageBucket: "shopkart-408dc.firebasestorage.app",
  messagingSenderId: "140247099275",
  appId: "1:140247099275:web:6a446ff8e8dce32adb718e",
  measurementId: "G-NTBB1KXMZ2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();

export const database = getFirestore(app);
export const storage = getStorage(app);
