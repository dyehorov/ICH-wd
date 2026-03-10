import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Users from "./pages/users"
import UserProfile from "./pages/userProfile"
import Nav from "./components/nav"

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    address: {
      street: "123 Maple St",
      city: "New York",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    address: {
      street: "456 Oak Ave",
      city: "Chicago",
      country: "USA",
    },
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    address: {
      street: "789 Pine Rd",
      city: "San Francisco",
      country: "USA",
    },
  },
  {
    id: 4,
    name: "Diana Miller",
    email: "diana.miller@example.com",
    address: {
      street: "101 Cedar Blvd",
      city: "Seattle",
      country: "USA",
    },
  },
]

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route
          path="/userProfile/:userId"
          element={<UserProfile users={users} />}
        />
      </Routes>
    </>
  )
}
