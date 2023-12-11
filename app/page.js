import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/welcomepg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl">Welcome</h1>
        <div className="flex justify-center space-x-4 mt-4">
          <div>
            <Link href="/login">Log in</Link>
          </div>
          <div>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
