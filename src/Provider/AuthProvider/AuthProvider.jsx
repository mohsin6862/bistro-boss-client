import React from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loader,setLoader]= useState(true)



    const AuthInfo ={
        user,
        loader,

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;