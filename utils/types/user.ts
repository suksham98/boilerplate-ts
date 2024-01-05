import { Document } from 'mongoose';

/**
 * Interfaces/structure of user related objects
 */

/**
 * Interface for sign up user data
 */
export interface signupData {
  email: string;
  password: string;
  fullname?: string;
}

/**
 * Interface for user data response after saving the new user
 */
export interface SignupDataResponse extends Document {
  email: string;
  password: string;
  fullname: string;
}

