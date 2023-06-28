import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW868EpiNHOkcGaq4gLNYti9D3EvtRBhI",
  authDomain: "react-demos-blog.firebaseapp.com",
  projectId: "react-demos-blog",
  storageBucket: "react-demos-blog.appspot.com",
  messagingSenderId: "398652587109",
  appId: "1:398652587109:web:2a0ad49559aa2b4e121a8c"
};


const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseapp);