import User from '@/model/User';
import Todo from '@/model/Todo';
import ConnectionDB from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await ConnectionDB();
  try {
    const { text, completed, assigned_to, creator } = await req.json();
    console.log(text, completed, creator, assigned_to);
    const todo = new Todo({
      text,
      completed,
      creator,
      assigned_to,
    });
    await todo.save();

    if (todo) {
      return NextResponse.json(
        {
          message: 'Todo Added',
          success: true,
          todo,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something Went Wrong Route',
        error,
      },
      { status: 500 }
    );
  }
}
