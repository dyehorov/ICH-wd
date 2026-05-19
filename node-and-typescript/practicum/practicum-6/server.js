import express from "express"

const app = express()

app.use(express.json())

let items = [
  { id: 1, name: "Item One", description: "This is item one" },
  { id: 2, name: "Item Two", description: "This is item two" },
]

app.get("/items", (req, res) => {
  res.json(items)
})

app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id))
  if (!item) return res.status(404).json({ message: "Item not found" })
  res.json(item)
})

app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  }
  items.push(newItem)
  res.status(201).json(newItem)
})

app.put("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id))
  if (!item) return res.status(404).json({ message: "Item not found" })

  item.name = req.body.name || item.name
  item.description = req.body.description || item.description
  res.json(item)
})

app.delete("/items/:id", (req, res) => {
  items = items.filter(i => i.id !== parseInt(req.params.id))
  res.status(204).send()
})

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
})
