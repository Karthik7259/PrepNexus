import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvmpKCNDbKR53TGdVK7qqsM5GTYUhsFns",
  authDomain: "prepnexus-20.firebaseapp.com",
  projectId: "prepnexus-20",
  storageBucket: "prepnexus-20.firebasestorage.app",
  messagingSenderId: "1053096671684",
  appId: "1:1053096671684:web:2833e024795077993d8c91",
  measurementId: "G-BPFV6B7F03"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);