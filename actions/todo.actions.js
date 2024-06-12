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
    const response = await fetch('http://localhost:3000/api/getusertodos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
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

export async function toggleTodo(todoID, userId) {
  console.log('Todo Action', todoID, userId);
  try {
    const response = await fetch('http://localhost:3000/api/updatetodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todoID, userId, action: 'toggle' }),
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

export async function updateTodo(todoID, userId, newText, newAssignedTo) {
  console.log('Todo Action', todoID, userId, newText, newAssignedTo);
  try {
    const response = await fetch('http://localhost:3000/api/updatetodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todoID,
        userId,
        newText,
        newAssignedTo,
        action: 'update',
      }),
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

export async function deleteTodo(todoID, userId) {
  console.log('Todo Action', todoID, userId);
  try {
    const response = await fetch('http://localhost:3000/api/deletetodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todoID,
        userId,
      }),
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
