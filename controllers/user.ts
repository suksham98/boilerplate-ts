import { Request, Response } from '../app';
import { userSchema } from '../models/user';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { signupData, SignupDataResponse } from '../utils/types/user';

/**
 * To use User as a mongo model instance
 */
const User = mongoose.model('User', userSchema);

/**
 * API to get users list
 */
export const getUsersList = async (req: Request, res: Response) => {
  try {
    const usersList: signupData[] = await User.find();

    if (usersList) {
      res.status(200).json({ Users: usersList });
    } else {
      res.status(200).json({ Message: 'Users not found' });
    }

    console.log(`Users' data sent`);
  } catch (err: unknown) {
    console.log('Errorr:', err);
    res.status(401).json({ error: 'Something went wrong' });
  }
};

/**
 * API to register a new user
 */
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, fullname, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: 'Please add email and password fields' });
    }

    const existingUser: SignupDataResponse | null = await User.findOne({ email });

    if (existingUser !== null) {
      return res.status(522).json({ error: 'User already exists. Try with another email id' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserObject: signupData = {
      email,
      fullname,
      password: hashedPassword,
    };

    const newUser: SignupDataResponse = new User(newUserObject);
    await newUser.save();

    res.json({ success: 'New user added' });
  } catch (err: unknown) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
