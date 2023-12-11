'use client'
import React from 'react';
import {Auth} from "../_utils/auth-signup"

const SignUpPage = () => {
  
  return (
    <div className="bg-cover bg-[url('/signuppg.jpg')] bg-center bg-no-repeat h-screen">     
      <div>
        <Auth/>
      </div>
    </div>
  );
};

export default SignUpPage;