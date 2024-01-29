// frontend/src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleRegistration = async () => {
    try {
      const response = await registerUser(userData);
      console.log('User registered successfully:', response);
      // You can also navigate to another page or perform other actions upon successful registration
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <label>
        Username:
        <input
          type="text"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
      </label>
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Register;
