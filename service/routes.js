import express from "express";
import { fb } from "./firestore.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const router = express.Router();

const auth = getAuth(fb);

router.get('/', (req, res) => {
  res.send(auth)
});

export default router;