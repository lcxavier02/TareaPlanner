import express from 'express';
import fb from "./firestore.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = 3000;

const db = getFirestore(fb);

app.get('/', async (req, res) => {
  const usersRef = collection(db, "users");
  const usersSnap = await getDocs(usersRef);

  usersSnap.forEach((doc) => {
    res.send(doc.data());
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});