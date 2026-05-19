import { DataTypes } from "sequelize"
import sequelize from "../config/database.js"

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          msg: "Username must be from 2 to 50 characters length",
          args: [2, 50],
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Invalid email format" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: { args: [6, 100], msg: "Password must be at least 6 characters" },
      },
    },
  },
  {
    timestamps: true,
  },
)

export default User
