import NoteModel from "../model/notesModel.js";

class NoteControllers {
  async getNotes(req, res) {
    try {
      const allNotes = await NoteModel.findAll();

      res.status(200).json(allNotes);
    } catch (err) {
      res.status(500).json({
        message: `Houve um erro ao tentar se conectar.`,
        error: err.message,
      });
    }
  }

  async createNote(req, res) {
    try {
      const { title, content } = req.body;
      const newNote = await NoteModel.build({
        title,
        content,
      });

      await newNote.save();
      res
        .status(201)
        .json({ status: "ok", message: "Nota criada com sucesso." });
    } catch (err) {
      res.status(500).json({
        message: `Houve um erro ao tentar se conectar.`,
        error: err.message,
      });
    }
  }

  verifyValueIsNotNull(title, content) {
    if (!title) {
      return [`Untitled`, content];
    }

    if (!content) {
      return [title, "Digite algo legal aqui!"];
    }

    return [title, content];
  }
}

export default NoteControllers;
