/*import firebase from 'firebase/';
import "firebase";



export const app = firebase.initializeApp({
    "projectId": "fb-parcial2-web",
    "appId": "1:159462061839:web:a13bb29d4d71154f0b307a",
    "storageBucket": "fb-parcial2-web.appspot.com",
    "apiKey": "AIzaSyC9fcWHjFO9dNLhURZ9rVec41MktulUZmc",
    "authDomain": "fb-parcial2-web.firebaseapp.com",
    "messagingSenderId": "159462061839"
  });
  */
  import { initializeApp } from 'firebase/app';
  import { getAuth } from 'firebase/auth';
  import { getFirestore } from 'firebase/firestore'; // Or getDatabase for Realtime Database
  
  const firebaseConfig = {
    "projectId": "fb-parcial2-web",
    "appId": "1:159462061839:web:a13bb29d4d71154f0b307a",
    "storageBucket": "fb-parcial2-web.appspot.com",
    "apiKey": "AIzaSyC9fcWHjFO9dNLhURZ9rVec41MktulUZmc",
    "authDomain": "fb-parcial2-web.firebaseapp.com",
    "messagingSenderId": "159462061839"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app); // Or database for Realtime Database
  
  export { app, auth, db }; // Export for use in your application