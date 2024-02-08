import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCN2mscHx1hmYGc0glUO2wAoIL5kMsPJfw",
    authDomain: "carpetdiem-13233.firebaseapp.com",
    databaseURL: "https://carpetdiem-13233-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "carpetdiem-13233",
    storageBucket: "carpetdiem-13233.appspot.com",
    messagingSenderId: "693484254179",
    appId: "1:693484254179:web:887d26b1d3654b61a526d6",
    measurementId: "G-V79WHBYPDQ"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);