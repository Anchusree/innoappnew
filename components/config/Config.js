

import { initializeApp } from 'firebase/app';
import {initializeAuth, getAuth,getReactNativePersistence, updatePassword, reauthenticateWithCredential, EmailAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from "firebase/storage";
import {getDatabase} from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJD7-YHF6rUQCwwUP5E6ftQaqc5bpKC-k",
  authDomain: "skillscompetition1.firebaseapp.com",
  projectId: "skillscompetition1",
  storageBucket: "skillscompetition1.appspot.com",
  messagingSenderId: "68750813616",
  appId: "1:68750813616:web:e5f4fa7b0cacee43038e75"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app)
const auth = getAuth(app)
export const storage = getStorage(app)

const databs = getDatabase()


export {auth,app,databs}