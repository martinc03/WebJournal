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
      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  
  if (!user || loading) {
    return null;
  }

  const backgroundContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 40px)',
    padding: '20px', 
  };

  const backgroundStyle = {
    backgroundImage: `url('/authhomepg.gif')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100%', 
    width: '80%', 
  };



const contentStyle = {
  textAlign: 'center',
  color: 'white',
  paddingTop: '30px', 
  paddingBottom: '50px', 
 
};

const signOutButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

return (
  <div style={backgroundContainerStyle}>
    <div style={backgroundStyle}>
      <div style={contentStyle}>
        <h1 className="text-4xl"> My WebJournal</h1>
        <div style={{ paddingTop: '30px' }} className="flex justify-center space-x-4">
          <div>
            <Link href="/journal/createJournalpg">Create Entry</Link>
          </div>
          <div>
            <Link href="/journal/viewJournalETpg">View Entry</Link>
          </div>
        </div>
        <div style={signOutButtonStyle}>
          <button
            onClick={handleSignOut}
            className="bg-transparent text-white font-bold py-2 px-4 rounded"
            style={{
              border: '1px solid white',
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </div>
);

};

export default HomePage;
