import express from "express";
import NoteControllers from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", new NoteControllers().getNotes);
router.post("/", new NoteControllers().createNote);

export default router;