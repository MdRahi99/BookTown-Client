import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const signInWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
};

const logOut = () => {
    return signOut(auth);
};

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
    
        return () => {
            return unsubscribe;
        }
    },[]);

    const authInfo = {signInWithGoogle, logOut, user};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;