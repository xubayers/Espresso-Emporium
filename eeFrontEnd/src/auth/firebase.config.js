import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD3mf-oIiKvPrCry8Fqt2ooMb8WtmQHZ4",
  authDomain: "usermanagement-5a713.firebaseapp.com",
  projectId: "usermanagement-5a713",
  storageBucket: "usermanagement-5a713.firebasestorage.app",
  messagingSenderId: "406336532743",
  appId: "1:406336532743:web:a7f2e3376148c93517d5a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
