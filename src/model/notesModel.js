import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../database/connectDatabase.js";

class NoteModel extends Model {}

NoteModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Notes",
  }
);

export default NoteModel;