import sequelize from "./database.js"
import "../models/index.js"

async function syncDatabase() {
  try {
    await sequelize.authenticate()
    console.log("Database connected")

    await sequelize.sync({ force: true })
    console.log("All tables created")

    process.exit()
  } catch (error) {
    console.error("Error:", error.message)
  }
}

syncDatabase()
