import express from 'express';
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());

const PORT = 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});