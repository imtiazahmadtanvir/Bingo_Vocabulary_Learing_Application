import { useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config"; // Ensure this is properly set up

// Create the AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Initialize Firebase Auth
    const auth = getAuth(app);

    // Define state for the user
    const [user, setUser] = useState(null);

    // Function to create a new user
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Create the authInfo object
    const authInfo = {
        user,
        setUser,
        createNewUser,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children} {/* Render children */}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
