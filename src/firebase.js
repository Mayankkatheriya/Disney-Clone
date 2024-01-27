// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEGrhp9idtlCUC8_Y5YlvetIBv68flHx4",
  authDomain: "disney-clone-d17f1.firebaseapp.com",
  projectId: "disney-clone-d17f1",
  storageBucket: "disney-clone-d17f1.appspot.com",
  messagingSenderId: "897899444653",
  appId: "1:897899444653:web:987682f80c647b76534924"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, db };
export default firebaseApp;