import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const LogIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }

      const SignInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
      }

      useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
     
            setLoading(false)
        })
        return ()=>{
            return Unsubscribe();
        }
      },[]);

      const UpdateProfileInfo =(user,name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL
        })
    }

      const LogOut =()=>{
        setLoading(true)
        signOut(auth)
      }

    const AuthInfo ={
        user,
        loading,
        createUser,
        LogIn,
        LogOut,
        UpdateProfileInfo,
        SignInWithGoogle

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;