import mongoose from 'mongoose';

/**
 * Basic DB model for user
 */
export const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

mongoose.model('User', userSchema);
