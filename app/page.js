'use client'
import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div className="bg-cover bg-[url('/mp_background.png')] bg-center bg-no-repeat h-screen">     
      <h1 className="text-white text-4xl text-center pt-10"> Welcome</h1>
      <div className="flex justify-center space-x-4 mt-4">
      <div>
          <Link href="/login">Log in</Link>
        </div>
        <div>
          <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

