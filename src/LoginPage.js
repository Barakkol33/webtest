import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout: 600,
        withCredentials: true,
      });   
      setMessage(response.data.msg);

    } catch (error) {
      setMessage('Login failed');
    }
    
    try {
      const response2 = await axios.get('http://127.0.0.1:8000/protected', {
        withCredentials: true,
      });
      setMessage(response2.data.msg);
      navigate("/user_home", {state: {"message": response2.data.msg}})
    } catch (error) {
      setMessage('Access to protected route failed: ' + error);
    }
    
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginPage;
