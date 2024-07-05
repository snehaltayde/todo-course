import mongoose from 'mongoose';

const ConnectionDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // console.log('DB Already');
    return;
  }
  await mongoose.connect(
    `DB String`
  );
  console.log('DB COnnected');
};

export default ConnectionDB;
