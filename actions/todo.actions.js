'use server';
export async function AddTodo(text, completed, creator, assigned_to) {
  console.log('Todo Action', text, completed, creator, assigned_to);
  try {
    const response = await fetch('http://localhost:3000/api/addtodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        completed: false,
        creator: creator,
        assigned_to: assigned_to,
      }),
    });

    const data = await response.json();
    if (!data.success) {
      throw new Error('Failed to add new task');
    }

    return data;
  } catch (error) {
    console.log(error);
    return {
      message: 'Something Went Wrong Action',
      error,
    };
  }
}

export async function getAllTodos(userId) {
  try {
    const response = await fetch('http://localhost:3000/api/getalltodos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      message: 'Something Went Wrong Action',
      error,
    };
  }
}
