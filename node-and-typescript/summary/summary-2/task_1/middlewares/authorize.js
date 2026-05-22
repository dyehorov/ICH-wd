import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export default function authorize(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorize" })
  }

  const token = authHeader.split(" ")[1]

  jwt.verify(token, process.env.JWT_TOKEN, (error, data) => {
    if (error) {
      return res.status(403).json({ success: false, message: "Forbidden" })
    }

    req.user = data

    next()
  })
}
