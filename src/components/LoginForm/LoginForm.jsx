import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  // const [dailyStreak, setDailyStreak] = useState(dailyStreak || '1 day! ')

  // async function handleSubmit(evt) {
  //   // Prevent form from being submitted to the server
  //   evt.preventDefault();
  //   try {
  //     // The promise returned by the signUp service method 
  //     // will resolve to the user object included in the
  //     // payload of the JSON Web Token (JWT)
  //     const user = await usersService.login(credentials);
  //     setUser(user);
  //   } catch {
  //     setError('Log In Failed - Try Again');
  //   }
  // }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    
    try {
      // Log the user in and get the updated user data
      const user = await usersService.login(credentials);
      
      // Check if the last login was on the same day
      const today = new Date().toISOString().slice(0, 10);
      const lastLoginDate = user.lastLogin ? user.lastLogin.slice(0, 10) : null;
      if (lastLoginDate !== today) {
        // Update the user's streak if it's a new day
        const dailyStreak = await fetch(`/${user._id}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (dailyStreak.ok) {
          const updatedUser = await dailyStreak.json();
          setUser(updatedUser);
        } else {
          console.error('Error updating streak:', dailyStreak.status);
        }
      }
      
           setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="login-form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit" className='submit-btn'>LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
} 

