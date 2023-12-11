import { createContext, useState, useContext } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged,signOut } from 'firebase/auth'; // Update the imports as needed
import { auth } from '../_utils/firebase'; // Import the auth object from your firebase file
import {Login} from '../_utils/auth-login';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const logOut = () => {

    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
    })
  })


  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
