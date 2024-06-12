import Todo from '@/model/Todo';
import ConnectionDB from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await ConnectionDB();

  try {
    const { action, todoID, userId, newText, newAssignedTo } = await req.json();

    if (action === 'toggle') {
      // const todo = await Todo.findOne({ _id: todoID, creator: userId });

      const todo = await Todo.findOne({ _id: todoID });
      if (!todo) {
        return NextResponse.json(
          { message: 'Todo not found' },
          { status: 404 }
        );
      }
      todo.completed = !todo.completed;
      await todo.save();

      return NextResponse.json(
        {
          message: 'Todo Updated',
          success: true,
          todo,
        },
        { status: 200 }
      );
    }

    if (action === 'update') {
      const todo = await Todo.findOneAndUpdate(
        { _id: todoID, creator: userId },
        { $set: { text: newText, assigned_to: newAssignedTo } },
        { new: true } // Return the updated document
      );
      if (!todo) {
        return NextResponse.json(
          { message: 'Todo not found' },
          { status: 200 }
        );
      }

      const populatedTodo = await Todo.findById(todo._id)
        .populate('creator', '_id firstname lastname email')
        .populate('assigned_to', '_id firstname lastname email');

      return NextResponse.json(
        {
          message: 'Todo Updated',
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
