import { DataTypes } from "sequelize"
import sequelize from "../config/db.js"

export const App = sequelize.define(
  "App",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "apps",
    timestamps: false,
  },
)
