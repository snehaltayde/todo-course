import User from '@/model/User';
import Todo from '@/model/Todo';
import ConnectionDB from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await ConnectionDB();
  try {
    const { userId, todoID } = await req.json();

    console.log('Uid', userId, todoID);

    const todo = await Todo.findOne({ _id: todoID, creator: userId });

    if (!todo) {
      return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
    }
    const deletedtodo = await Todo.deleteOne({ _id: todoID });
    return NextResponse.json(
      {
        message: 'Todo Added',
        success: true,
        deletedtodo,
      },
      { status: 200 }
    );
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
