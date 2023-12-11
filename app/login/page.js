'use client'
import React from 'react';
import {AuthLogin} from "../_utils/auth-login"

const LogInPage = () => {
  return (
    <div className="bg-cover bg-[url('/mp_background.png')] bg-center bg-no-repeat h-screen">     
      <div>
        <AuthLogin/>
      </div>
    </div>
  );
};

export default LogInPage;