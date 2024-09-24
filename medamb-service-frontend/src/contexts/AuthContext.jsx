/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { getItem } from "../services/session";


export const AuthContext = createContext({
  loading: true,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {}
});

export const AuthProvider = ( props ) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // check session
  useEffect(() => {
    if (getItem("access_token")) {
      setUser(getItem("user"));
      setIsLoggedIn(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
      }}
    >
      {props?.children}
    </AuthContext.Provider>
  );
};

