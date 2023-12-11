'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const { user, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  console.log('User:', user);

  const handleSignOut = async () => {
    try {
      await logOut(); 
      router.push('/')
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  

  if (!user || loading) {
    return null;
  }

  // Render the content for authenticated users
  return (
    <div className="bg-cover bg-[url('/mp_background.png')] bg-center bg-no-repeat h-screen">
      <h1 className="text-white text-4xl text-center pt-10"> My WebJournal</h1>
      <div className="flex justify-center space-x-4 mt-4">
        <div>
          <Link href="/journal">Home</Link>
        </div>
        <div>
          <Link href="/journal/createJournalpg">Create Entry</Link>
        </div>
        <div>
          <Link href="/journal/viewJournalETpg">View Entry</Link>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Sign Out
        </button>
      </div>    
    </div>
  );
};

export default HomePage;
