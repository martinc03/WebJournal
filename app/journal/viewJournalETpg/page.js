'use client'

import React from 'react';
import { Redirect } from 'react-router-dom'; // Assuming you're using React Router
import { useUserAuth } from 'your-user-auth-hook'; // Replace 'your-user-auth-hook' with your actual hook

const { default: HomePage } = require("@/app/page");

const JournalHomePage = () => {
    const { user } = useUserAuth();

    if (!user) {
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
