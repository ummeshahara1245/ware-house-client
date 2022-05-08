import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const intializeFirebases = () => {
  initializeApp(firebaseConfig);
};

export default intializeFirebases;