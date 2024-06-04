'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      setLoading(false);
      if (result.error) {
        console.log(result.error);
      } else {
        console.log('Login Successful');
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      console.log('Login Failed');
    }
  };
  return (
    <>
      <section className="w-full max-w-xs mt-10 m-auto">
        <h3 className="text-center mb-5 font-bold">Login</h3>
        <form className="bg-white shadow-md  border-solid border-zinc-400 border-2 rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-zinc-700 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default page;
