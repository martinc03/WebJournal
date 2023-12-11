// Auth.js

import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
        const user = userCredential.user;
        console.log(user);
      });
    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
  };

  const inputStyle = {
    color: 'black',
  };

  const buttonStyle = {
    color: 'black', 
  };

  return (
    <div>
      <input
        style={inputStyle}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={inputStyle}
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp} style={buttonStyle}>Sign Up</button>
  </div>

  );
};
