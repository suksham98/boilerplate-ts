"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./views/user"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const MONGOURI = process.env.MONGOURI || 'mongodb+srv://sukshamaryaitwaves:T5N8XRxy4q4bfRYT@cluster0.7k89d2j.mongodb.net/';
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
mongoose_1.default.connect(MONGOURI);
mongoose_1.default.connection.on('connected', () => {
    console.log("Connected to mongo DB!");
});
mongoose_1.default.connection.on('error', (err) => {
    console.log("Error connecting", err);
});
app.use('/api', user_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
