
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBpUHKXyWsyQ9utp-d_dm3ERrlV4zpwBo",
    authDomain: "netflix-clone-project-74e00.firebaseapp.com",
    projectId: "netflix-clone-project-74e00",
    storageBucket: "netflix-clone-project-74e00.appspot.com",
    messagingSenderId: "405596169899",
    appId: "1:405596169899:web:419678357933758d49b9ee"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app);
  
 