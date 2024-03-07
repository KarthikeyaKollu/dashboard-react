import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA5gSVliyQmu6uuDJya7uUC-vdQI2uR0w4",
  authDomain: "dashboard-31deb.firebaseapp.com",
  databaseURL: "https://dashboard-31deb-default-rtdb.firebaseio.com",
  projectId: "dashboard-31deb",
  storageBucket: "dashboard-31deb.appspot.com",
  messagingSenderId: "63309565536",
  appId: "1:63309565536:web:13e542b4aba3a21d753d05",
  measurementId: "G-XGQML9KNW7"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, db, storage };