"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * To use User as a mongo model instance
 */
const User = mongoose_1.default.model("User", user_1.userSchema);
/**
 * API to get users list
 */
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.find();
        if (users) {
            res.status(200).json({ "Users": users });
        }
        console.log(`Users' data sent`);
    }
    catch (err) {
        console.log("Errorr:", err);
        res.status(401).json({ "error": "Something went wrong" });
    }
});
exports.getUsers = getUsers;
/**
 * API to register a new user
 */
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, fullname, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: 'Please add email and password fields' });
        }
        const existingUser = yield User.findOne({ email });
        if (existingUser) {
            return res.status(522).json({ error: 'User already exists. Try with another email id' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = new User({
            email,
            fullname,
            password: hashedPassword,
        });
        const user = new User(newUser);
        user.save();
        res.json({ "success": "New user added" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createUser = createUser;
