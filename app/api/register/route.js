import { NextResponse } from 'next/server';
import ConnectionDB from '@/lib/dbConnect';
import bcrypt from 'bcrypt';
import User from '@/model/User';

export async function POST(req) {
  await ConnectionDB();
  try {
    const _req = await req.json();
    const { email, password } = _req;
    const hashedpassword = await bcrypt.hash(password, 10);
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return NextResponse.json(
        {
          message: 'User ALready Exists',
        },
        { status: 409 }
      );
    } else {
      const newUser = new User({
        email,
        password: hashedpassword,
      });
      await newUser.save();
      return NextResponse.json(
        {
          message: 'User Registered',
          newUser,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log(error);
    NextResponse.json(
      { message: 'Something Went Wrong', error },
      { status: 500 }
    );
  }
}
