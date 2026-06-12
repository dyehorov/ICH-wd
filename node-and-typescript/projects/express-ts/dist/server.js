"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// ====================== DATABASE ================================
const users = [
    { id: 1, name: "Alice", email: "alice@gd.com" },
    { id: 2, name: "Dima", email: "dima@gd.com" },
];
// ======================= SERVER =============================
const app = (0, express_1.default)();
app.use(express_1.default.json());
// ===================== GET /api/users =========================
app.get("/api/users", (req, res) => {
    res.json({
        success: true,
        data: users,
        count: users.length,
    });
});
// ===================== POST /api/users =========================
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({
            success: false,
            error: "All fileds are required",
        });
        return;
    }
    if (users.some(user => user.email === email)) {
        res.status(400).json({
            success: false,
            error: "User with such email was already been registred",
        });
        return;
    }
    const newUser = {
        id: users.length,
        name,
        email,
    };
    users.push(newUser);
    res.status(201).json({
        success: true,
        data: newUser,
        message: "Successfully registred",
    });
});
app.put("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    if (!name || !email)
        return res.status(400).json({
            success: false,
            error: "All fileds are required",
        });
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1)
        return res.status(404).json({
            success: false,
            error: "User not found",
        });
    users[userIndex] = {
        id: id,
        name,
        email,
    };
    res.status(200).json({
        success: true,
        data: users[userIndex],
        message: "User updated successfully",
    });
});
app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1)
        return res.status(404).json({
            success: false,
            error: "User not found",
        });
    if (name !== undefined) {
        users[userIndex].name = name;
    }
    if (email !== undefined) {
        users[userIndex].email = email;
    }
    res.status(200).json({
        success: true,
        data: users[userIndex],
        message: "User updated successfully",
    });
});
app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1)
        return res.status(404).json({
            success: false,
            error: "User not found",
        });
    users.splice(userIndex, 1);
    res.status(200).json({
        success: true,
        data: {
            deletedId: id,
        },
        message: "User deleted successfully",
    });
});
app.post("/api/users/:id/change-email", (req, res) => {
    const id = Number(req.params.id);
    const { newEmail, confirmEmail } = req.body;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1)
        return res.status(404).json({
            success: false,
            error: "User not found",
        });
    const emailExists = users.some(user => user.email === newEmail);
    if (emailExists)
        return res.status(400).json({
            success: false,
            error: "Such email already exists",
        });
    if (newEmail !== confirmEmail)
        return res.status(400).json({
            success: false,
            error: "Email does not match email confirm",
        });
    users[userIndex].email = newEmail;
    res.status(200).json({
        success: true,
        data: users[userIndex],
        message: "User email updated successfully",
    });
    console.log(users);
});
app.listen(3333, () => {
    console.log(`TS Server is running at http://127.0.0.1:3333`);
});
