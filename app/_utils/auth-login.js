
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation'; // Correct import statement

export const AuthLogin = () => {
  const { onLogin } = UserAuth(); // Retrieve onLogin function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin(email, password);
      router.push('/journal');
    } catch (error) {
      console.error('Login failed', error);
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
      <form onSubmit={handleSubmit}>
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
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};
