import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const intializeFirebases = () => {
  initializeApp(firebaseConfig);
};

export default intializeFirebases;