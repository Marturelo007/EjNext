import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loggedInUserName, setLoggedInUserName] = useState(null);

    return (
        <UserContext.Provider value={{ loggedInUserName, setLoggedInUserName }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
