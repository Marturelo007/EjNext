"use client";

import React, { useState } from 'react';
import Button from './button';
import styles from './input.module.css';
import { useUser } from './UserContext';

const InputComponent = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { loggedInUserID, setLoggedInUserID } = useUser(); // Aquí obtienes ambos

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userID, password }),
            });

            if (!response.ok) {
                throw new Error('Unauthorized');
            }

            const data = await response.json();
            setSuccessMessage('Login successful!');
            setIsLoggedIn(true);
            setLoggedInUserID(data.userID); // Almacena el ID del usuario en el contexto

            localStorage.setItem('loggedInUserID', data.userID);

            console.log(`Login successful! User Name: ${data.userName}, Logged in User ID: ${data.userID}`);

        } catch (error) {
            setErrorMessage('Login failed. Please check your credentials.');
            console.error('Error during login:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <div className="error">{errorMessage}</div>}
            {successMessage && <div className="success">{successMessage}</div>}

            <div className={styles.field}>
                <input 
                    autoComplete="off" 
                    placeholder="Enter User ID" 
                    className={styles.inputField} 
                    type="text" 
                    value={userID} 
                    onChange={(e) => setUserID(e.target.value)} 
                    required 
                />
            </div>

            <div className={styles.field}>
                <input 
                    placeholder="Enter Password" 
                    className={styles.inputField} 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            
            {!isLoggedIn && <button type='submit'>Log in</button>}
            {isLoggedIn && (
                <Button href="/usersD" userID={loggedInUserID}></Button> // Usa loggedInUserID
            )}
        </form>
    );
};

export default InputComponent;
