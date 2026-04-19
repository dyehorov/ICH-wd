import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Home from "./pages/home";
import Nav from "./components/nav";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
