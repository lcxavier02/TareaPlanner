import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, firestore } from "../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const googleLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => signOut(auth);

  const registerUser = (email, username, userCreated) =>
    setDoc(doc(firestore, "users", userCreated.user.uid), {
      name: username,
      email: email,
      createDate: new Date(),
    });

  return (
    <authContext.Provider
      value={{ signUp, logIn, registerUser, logOut, googleLogIn, user }}
    >
      {children}
    </authContext.Provider>
  );
}
