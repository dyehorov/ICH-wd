import { DataTypes } from "sequelize"
import sequelize from "../config/database.js"

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Comment cannot be empty" },
      },
    },
    // postId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "posts",
    //     key: "id",
    //   },
    // },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "users",
    //     key: "id",
    //   },
    // },
  },
  {
    timestamps: true,
  },
)

export default Comment
