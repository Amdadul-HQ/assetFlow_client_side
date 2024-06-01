import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null)

const ContextComponent = ({children}) => {
    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(false)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updataNamePhoto = (name,photo)=> {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
      // Get token from server
  const getToken = async email => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      { email },
      { withCredentials: true }
    )
    return data
  }

  const axiosSecure = useAxiosSecure()
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser)
                if(user){
                    getToken(currentUser?.email)
                }
            }
            else{
                setUser(null)
                axiosSecure.get('/logout')
            }
        })
        return () => unsubcribe()
    },[axiosSecure, user])


    const authInfo = {user,createUser,signIn,signInGoogle,logOut,updataNamePhoto}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextComponent;