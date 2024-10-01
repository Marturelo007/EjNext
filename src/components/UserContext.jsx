// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loggedInUserID, setLoggedInUserID] = useState('');

    useEffect(() => {
        // Cargar el ID de usuario desde localStorage
        const storedUserID = localStorage.getItem('loggedInUserID');
        if (storedUserID) {
            setLoggedInUserID(storedUserID);
        }
    }, []);

    const updateLoggedInUserID = (id) => {
        setLoggedInUserID(id);
        localStorage.setItem('loggedInUserID', id);
    };

    return (
        <UserContext.Provider value={{ loggedInUserID, setLoggedInUserID: updateLoggedInUserID }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
