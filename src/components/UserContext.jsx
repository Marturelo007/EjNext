import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loggedInUserName, setLoggedInUserName] = useState(null);
    const [loggedInUserID, setLoggedInUserID] = useState(null); // Add this line

    return (
        <UserContext.Provider value={{ loggedInUserName, setLoggedInUserName, loggedInUserID, setLoggedInUserID }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
