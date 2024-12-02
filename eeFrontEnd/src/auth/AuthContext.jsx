/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
    });

    return () => unSubs();
  }, []);

  const singUpwithEmailandPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInWithEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const object = {
    users,
    setUsers,
    singUpwithEmailandPass,
    signInWithEmailAndPass,
  };
  return <UserContext.Provider value={object}>{children}</UserContext.Provider>;
}

function useUser() {
  return useContext(UserContext);
}

export { UserProvider, useUser };
