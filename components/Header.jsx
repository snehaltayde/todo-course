'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="bg-gray-900 text-gray-200 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-orange-500">XeroTasks</a>
          </Link>
        </div>
        <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <Link href="/" legacyBehavior>
            <a className="hover:text-orange-500">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-orange-500">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-orange-500">Contact</a>
          </Link>
          {status === 'authenticated' ? (
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="font-bold text-white">
                Signed in as {session.user.email}
              </p>
              <button
                className="border-solid border-white border-2 rounded px-4 py-2"
                onClick={() => signOut(() => console.log('Sign out'))}
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link href="/signin" legacyBehavior>
              <a className="border-solid border-white border-2 rounded px-4 py-2">
                Sign in
              </a>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
