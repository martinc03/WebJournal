import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUserAuth } from './your-user-auth-hook'; // Replace 'your-user-auth-hook' with your actual hook

const { default: HomePage } = require("@/app/page");

const JournalHomePage = () => {
    const { user } = useUserAuth();

    if (!user) {
        // Redirect to HomePage if user is not authenticated
        return <Redirect to={HomePage} />;
    }

    return (
        // Your content for the authenticated user here
        <div>
            <h1>Welcome to the Journal Home Page</h1>
            {/* Add your authenticated content */}
        </div>
    );
};

export default JournalHomePage;


/*
'use client'
import React from 'react';
import Link from 'next/link';
import {Auth} from "./_utils/auth"
const HomePage = () => {
  return (
    <div className="bg-cover bg-[url('/mp_background.png')] bg-center bg-no-repeat h-screen">     
      <h1 className="text-white text-4xl text-center pt-10"> My WebJournal</h1>
      <div className="flex justify-center space-x-4 mt-4">
        <div>
          <Link href="/Homepage">Home</Link>
        </div>
        <div>
          <Link href="/createJournalpg">Create Entry</Link>
        </div>
        <div>
          <Link href="/viewJournalETpg">View Entry</Link>
        </div>
      </div>
      <div>
        <Auth/>
      </div>
    </div>
  );
};
*/
