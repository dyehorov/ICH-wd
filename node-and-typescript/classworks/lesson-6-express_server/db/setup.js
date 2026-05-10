import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})

connection.connect(err => {
  if (err) {
    console.log(
      `There was an error while connecting to the database: ${err.stack}`,
    )

    return
  }

  console.log("Successfully connected to the database")
})

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL
    )
`

connection.query(createUsersTable, (err, results) => {
  if (err) {
    console.error(`Error while creating users table: ${err.stack}`)

    return
  }

  console.log("Users table created successfully")
})

export default connection
