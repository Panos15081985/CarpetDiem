import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  f//firebase Daten
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);