// import express from "express";
import express = require('express');
const router = express.Router();
import { getUsers, createUser } from '../controllers/user';

router.route('/get-users').get(getUsers);

router.route('/signup').post(createUser);

export default router;
