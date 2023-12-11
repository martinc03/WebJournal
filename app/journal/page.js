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
    height: 'calc(100vh - 40px)', // Adjust the height to create spacing top and bottom (40px here)
    padding: '20px', // Adjust the padding value as needed
  };

  const backgroundStyle = {
    backgroundImage: `url('/authhomepg.gif')`,
    backgroundSize: 'cover', // Adjust background size as needed
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100%', // Set height to 100% to fill the container
    width: '50%', // Set width to 100% to fill the container
  };

  const contentStyle = {
    textAlign: 'center',
    color: 'white',
    // Add any specific styles you want for the content here
  };

  
  return (
    <div style={backgroundContainerStyle}>
      <div style={backgroundStyle}>
        <div style={contentStyle}>
          <h1 className="text-4xl"> My WebJournal</h1>
          <div className="flex justify-center space-x-4 mt-4">
            <div>
              <Link href="/journal/createJournalpg">Create Entry</Link>
            </div>
            <div>
              <Link href="/journal/viewJournalETpg">View Entry</Link>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleSignOut}
              className="bg-transparent text-white font-bold py-2 px-4 rounded"
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: '10px',
                border: '1px solid white',
              }}
            >
              <img src="/signouticon.png" alt="Sign Out" style={{ width: '20px', marginRight: '5px' }} />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
