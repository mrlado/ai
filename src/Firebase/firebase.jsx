





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTdoessDa-sFq-8SpBJw95bn4dr2tPT6Q",
  authDomain: "artificium-eda7f.firebaseapp.com",
  projectId: "artificium-eda7f",
  storageBucket: "artificium-eda7f.appspot.com",
  messagingSenderId: "456412896431",
  appId: "1:456412896431:web:12c8b1231ea61c691c885a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app.auth)