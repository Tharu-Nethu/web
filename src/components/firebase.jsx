import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup ,signInWithEmailAndPassword} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_MgTSWglhNJ0g84OdnbtDWFm2-GGhw9Q",
  authDomain: "wie-uor.firebaseapp.com",
  projectId: "wie-uor",
  storageBucket: "wie-uor.firebasestorage.app",
  messagingSenderId: "820866424122",
  appId: "1:820866424122:web:7bfc2cdf1d9df4013dc403",
  measurementId: "G-11BMPECE3Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(firebaseApp);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Export auth and provider
export { auth, googleProvider, signInWithPopup };
export default firebaseApp;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app); 
export const rtdb = getDatabase(app);


export { signInWithEmailAndPassword, db };
