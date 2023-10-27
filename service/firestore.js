import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxJq9i35YjnWA0sxKN-ED2SxBAOIURqno",
  authDomain: "tareaplanner.firebaseapp.com",
  projectId: "tareaplanner",
  storageBucket: "tareaplanner.appspot.com",
  messagingSenderId: "175189473780",
  appId: "1:175189473780:web:52af924452f70b7e00a1a1",
  measurementId: "G-JR19QPNY42"
};

const fb = initializeApp(firebaseConfig);

export default fb;