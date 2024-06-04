import mongoose from 'mongoose';

const ConnectionDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // console.log('DB Already');
    return;
  }
  await mongoose.connect(`your mongodb connection string goes here`);
  console.log('DB COnnected');
};

export default ConnectionDB;
