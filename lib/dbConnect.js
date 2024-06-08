import mongoose from 'mongoose';

const ConnectionDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // console.log('DB Already');
    return;
  }
  await mongoose.connect(
    `mongodb://todoappuser:SGWLzTICpC9+@3.6.192.89:27017/todoapp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.3`
  );
  console.log('DB COnnected');
};

export default ConnectionDB;
