import React, { useState } from 'react';
import { useUser } from './UserContext'; // Adjust path as necessary
import Button from './button';
const InputComponent = () => {
    const { setLoggedInUserName } = useUser();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName, // using userName now
                    password,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }

            console.log(data);
            setLoggedInUserName(data.userName); // Set userName in context
            setIsLoggedIn(true); // Set login status to true
            setSuccessMessage('Login successful!');
            setErrorMessage('');
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage(error.message);
            setSuccessMessage('');
        }
    };

    return (
        <div>
            {/* Conditionally render the form based on login status */}
            {!isLoggedIn ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input
                            type="text"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                </form>
            ) : (
                <div>
                    <p>Welcome, {userName}!</p>
                    <Button href={"/usersD"}></Button>
                </div>
            )}
        </div>
    );
};

export default InputComponent;
