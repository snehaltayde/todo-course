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

    // Populate creator and assigned_to fields
    const populatedTodo = await Todo.findById(todo._id)
      .populate('creator', '_id firstname lastname email')
      .populate('assigned_to', '_id firstname lastname email');

    if (populatedTodo) {
      return NextResponse.json(
        {
          message: 'Todo Added',
          success: true,
          todo: populatedTodo,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something Went Wrong Route',
        error,
        success: false,
      },
      { status: 500 }
    );
  }
}
