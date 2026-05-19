import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME || "DB_NAME",
  process.env.DB_USERNAME || "username",
  process.env.DB_PASSWORD || "",
  {
    host: "localhost",
    dialect: "mysql",
  },
)

export default sequelize
