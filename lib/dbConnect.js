import mongoose from 'mongoose';

const ConnectionDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // console.log('DB Already');
    return;
  }
  await mongoose.connect(
    `yourdbstringhere`
  );
  console.log('DB COnnected');
};

export default ConnectionDB;
