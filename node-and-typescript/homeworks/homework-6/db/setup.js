import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
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

const createDataBaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME}`

connection.query(createDataBaseQuery, (err, results) => {
  if (err) {
    console.error(
      `Error while creating ${process.env.DATABASE_NAME} table: ${err.stack}`,
    )

    return
  }

  console.log(`${process.env.DATABASE_NAME} table created successfully`)
})

const createProductsTable = `
    CREATE TABLE IF NOT EXISTS product_db.products (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     price DECIMAL(10, 2) NOT NULL
    )
`

connection.query(createProductsTable, (err, results) => {
  if (err) {
    console.error(`Error while creating products table: ${err.stack}`)

    return
  }

  console.log("Products table created successfully")
})

export default connection
