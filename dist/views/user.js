"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express";
const express = require("express");
const router = express.Router();
const user_1 = require("../controllers/user");
router.route('/get-users').get(user_1.getUsers);
router.route('/signup').post(user_1.createUser);
exports.default = router;
