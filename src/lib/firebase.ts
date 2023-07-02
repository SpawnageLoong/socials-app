import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCHqyHBhzEIDSVEA-uCsWp9zMPK98fFP0",
    authDomain: "svelte-socials-app.firebaseapp.com",
    projectId: "svelte-socials-app",
    storageBucket: "svelte-socials-app.appspot.com",
    messagingSenderId: "525137249447",
    appId: "1:525137249447:web:eb3ea837bbb6625e684782",
    measurementId: "G-WNHJSHXRFG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
