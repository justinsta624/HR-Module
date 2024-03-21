import { useState } from 'react';
import axios from 'axios';
import Auth from '../utils/auth';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [signupEmailError, setSignupEmailError] = useState('');
  const [signupPasswordError, setSignupPasswordError] = useState('');
  const [signupSubmitStatus, setSignupSubmitStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    setUsernameError(!newUsername ? 'Name is required' : '');
  };

  const handleSignupEmailChange = (e) => {
    const newEmail = e.target.value;
    setSignupEmail(newEmail);
    setSignupEmailError(!newEmail ? 'Email is required' : '');
  };

  const handleSignupPasswordChange = (e) => {
    const newPassword = e.target.value;
    setSignupPassword(newPassword);
    setSignupPasswordError(!newPassword ? 'Password is required' : '');
  };

  const handleInvalidPassword = (e) => {
    setSignupPasswordError(!signupPassword ? 'Password is required' : signupPassword.length < 8 ? 'Password must be at least 8 characters' : '');
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInvalidEmail = () => {
    setSignupEmailError(!signupEmail ? 'Email is required' : !isValidEmail(signupEmail) ? 'Invalid email address' : '');
  };

  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    setUsernameError(!username ? 'Name is required' : '');
    setSignupEmailError(!signupEmail ? 'Email is required' : !isValidEmail(signupEmail) ? 'Invalid email address' : '');
    setSignupPasswordError(!signupPassword ? 'Password is required' : '');

    if (username && signupEmail && signupPassword) {
      try {
        const response = await axios.post('/api/users/signup', { username, email: signupEmail, password: signupPassword });

        if (response.status === 200) {
          const { token, user } = response.data;

          if (user && Object.keys(user).length !== 0) {
            setSignupSubmitStatus('Signup successful');
            Auth.login(user);
          } else {
            setSignupSubmitStatus('User data is invalid');
          }
        } else {
          setSignupSubmitStatus('Signup failed');
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setSignupSubmitStatus('Invalid email or password');
        } else {
          setSignupSubmitStatus('An error occurred');
        }
        console.error('An error occurred', error);
      }
    }

    setSubmitting(false);
  };

  return (
    <div className='signup-container'>
      <h2 className=''>Sign Up</h2>
      <form className='form signup-form' onSubmit={handleSignupFormSubmit}>
        <div className='mb-3'>
          <input
            className='form-control'
            type='text'
            id='name-signup'
            placeholder='Name'
            value={username}
            onChange={handleUsernameChange}
            onBlur={handleUsernameChange}
          />
          {usernameError && <div className='text-danger'>{usernameError}</div>}
        </div>
        <div className='mb-3'>
          <input
            className='form-control'
            type='text'
            id='email-signup'
            placeholder='Email'
            value={signupEmail}
            onChange={handleSignupEmailChange}
            onBlur={handleInvalidEmail}
          />
          {signupEmailError && <div className='text-danger'>{signupEmailError}</div>}
        </div>
        <div className='mb-3'>
          <input
            className='form-control'
            type='password'
            id='password-signup'
            placeholder='Password (minimum 8 characters)'
            value={signupPassword}
            onChange={handleSignupPasswordChange}
            onBlur={handleInvalidPassword}
          />
          {signupPasswordError && <div className='text-danger'>{signupPasswordError}</div>}
        </div>
        <div className='mb-3'>
          <button className='btn btn-dark' type='submit' disabled={submitting}>
            {submitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
      </form>
      {signupSubmitStatus && (
        <div className={`mt-3 alert ${signupSubmitStatus.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
          {signupSubmitStatus}
        </div>
      )}
    </div>
  );
};

export default Signup;
