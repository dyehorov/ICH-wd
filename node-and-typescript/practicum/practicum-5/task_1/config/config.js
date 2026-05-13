import dotenv from "dotenv"

dotenv.config()

export const db_config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "",
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "",
  },
}
