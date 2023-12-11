import { auth } from "./firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';

export const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setLoggedIn(true);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
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
      <form onSubmit={onLogin}>
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
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};
