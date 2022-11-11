import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyD6RVBTqPg0UeA4SAkPSMUfSPv2vSounkw",
  authDomain: "asoiuteacher.firebaseapp.com",
  projectId: "asoiuteacher",
  storageBucket: "asoiuteacher.appspot.com",
  messagingSenderId: "164249229210",
  appId: "1:164249229210:web:f3a8d30792ffe720960c23",
  measurementId: "G-5Y949EJRZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);