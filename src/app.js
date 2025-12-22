import express from "express";
import cors from "cors";
import tryDatabaseConnection from "../database/connectDatabase.js";
import NoteRoute from "./routers/noteRoutes.js"

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/notes", NoteRoute);

app.get("/", (req, res) => {
  res.send("Tudo ok.");
});

tryDatabaseConnection();

app.listen(PORT, () => {
  console.log(`Aplicação rodando => http://localhost:${PORT}/`);
});
