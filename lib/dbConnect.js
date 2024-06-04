import mongoose from 'mongoose';

const ConnectionDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // console.log('DB Already');
    return;
  }
  await mongoose.connect(
    `mongodb+srv://testuser:testuser@cluster0.qjx8ird.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
  console.log('DB COnnected');
};

export default ConnectionDB;
