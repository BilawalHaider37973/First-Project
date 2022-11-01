import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCvjJcIZ1d7EQwupOlSVaeOikuxbVa0f0",
  authDomain: "facebookclone-46d31.firebaseapp.com",
  databaseURL: "https://facebookclone-46d31-default-rtdb.firebaseio.com",
  projectId: "facebookclone-46d31",
  storageBucket: "facebookclone-46d31.appspot.com",
  messagingSenderId: "544874049139",
  appId: "1:544874049139:web:df4f9b920159fd80eb4406",
  measurementId: "G-6W2HHC7RS9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

export {
  set,
  ref,
  app,
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
