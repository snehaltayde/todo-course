'use server';
//Register Action

export async function Register(email, firstname, lastname, password) {
  try {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, firstname, lastname, password }),
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

export async function getAllUsers() {
  try {
    const response = await fetch('http://localhost:3000/api/getAllUsers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
