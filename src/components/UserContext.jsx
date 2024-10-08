import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loggedInUserID, setLoggedInUserID] = useState(null);
    const [loggedInUserName, setLoggedInUserName] = useState(null);

    return (
        <UserContext.Provider value={{ loggedInUserID, setLoggedInUserID, loggedInUserName, setLoggedInUserName }}>
          {children}
        </UserContext.Provider>
      );
    };
    export const useUser = () => useContext(UserContext);
