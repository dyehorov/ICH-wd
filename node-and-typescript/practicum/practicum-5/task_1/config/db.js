import db_config from "./config.js"
import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const env = process.env.NODE_ENV ?? "development"
const config = db_config[env]

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  },
)
