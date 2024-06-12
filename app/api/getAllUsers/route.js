import { NextResponse } from 'next/server';
import User from '@/model/User';
import ConnectionDB from '@/lib/dbConnect';

export async function GET() {
  await ConnectionDB();
  try {
    const allUsers = await User.find().select('_id firstname lastname');
    return NextResponse.json(
      {
        message: 'Users',
        success: true,
        users: allUsers,
      },
      { status: 200 }
    );
  } catch (error) {}
}
