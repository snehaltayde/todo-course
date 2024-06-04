//Register Action

export async function Register(email, password) {
  try {
    const response = await fetch('http://localhost:3000/api/register', {
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
