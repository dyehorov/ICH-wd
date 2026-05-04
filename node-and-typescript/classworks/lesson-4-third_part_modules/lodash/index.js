import lodash from "lodash"
import moment from "moment"
import axios from "axios"
import dotenv from "dotenv"
import nodemailer from "nodemailer"

const numbers = [1, 2, 3, 4, 5]

const shuffled = lodash.shuffle(numbers)

console.log("Original array:", numbers)
console.log("Shuffled array:", shuffled)

console.log("Current date and time:", moment().format("YYYY-MM-d, hh:mm:ss"))

const BASE_URL = "https://jsonplaceholder.typicode.com"

const fetchTodo = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/todos/${id}`)
    console.log("Todo:", response.data)
  } catch (error) {
    console.error(error)
  }
}

fetchTodo(1)

dotenv.config()

const apiKey = process.env.API_KEY
const port = process.env.PORT
const host = process.env.HOST

console.log(apiKey, port, host)

const myVar = process.env.MY_VAR
console.log(myVar)

const sendMail = async () => {
  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  })

  const info = await transporter.sendMail({
    from: '"Test" <test@example.com>',
    to: "alice@example.com",
    subject: "Test email",
    text: "Hello",
    html: "<b>Hello</b>",
  })

  console.log("Preview URL:", nodemailer.getTestMessageUrl(info))
}

sendMail()
