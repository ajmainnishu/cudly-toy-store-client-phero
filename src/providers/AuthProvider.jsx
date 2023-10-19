import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider

const AuthProvider = ({ children }) => {
    // user check state
    const [user, setUser] = useState(null);
    // loading state
    const [loading, setLoading] = useState(true);
    // create email
    const createUserEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user login
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // user profile update
    const updateUserProfile = (name, photo) => {
        // loading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    // user logout
    const userLogOut = () => {
        signOut(auth)
            .then()
            .catch()
    }
    // google login
    const userGoogleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // user check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUserEmail,
        updateUserProfile,
        userLogOut,
        userLogIn,
        userGoogleLogIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;