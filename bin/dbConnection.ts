import mongoose from 'mongoose';

/**
 * Connect to MongoDB Database
 */
export function dbConnect(connectionString: string): void {
  mongoose.connect(connectionString);
  mongoose.connection.on('connected', () => {
    console.log('Connected to mongo DB!');
  });

  mongoose.connection.on('error', (err: string) => {
    console.log('Error connecting', err);
  });
}
