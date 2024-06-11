import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  password: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
