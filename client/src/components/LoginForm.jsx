import { useState } from 'react';
import axios from 'axios';
import Auth from '../utils/auth'; // Importing the Auth service

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!newEmail ? 'Email is required' : '');
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(!newPassword ? 'Password is required' : '');
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInvalidEmail = () => {
    setEmailError(!email ? 'Email is required' : !isValidEmail(email) ? 'Invalid email address' : '');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Validate email and password
    setEmailError(!email ? 'Email is required' : !isValidEmail(email) ? 'Invalid email address' : '');
    setPasswordError(!password ? 'Password is required' : '');

    if (email && password) {
      try {
        const response = await axios.post('/api/users/login', { email, password });

        if (response.status === 200) {
          const { token, user } = response.data;

          // Check if user object is valid
          if (user && Object.keys(user).length !== 0) {
            // Redirect the user to another page or update UI as needed
            setSubmitStatus('Login successful');
            Auth.login(user); // Pass the user object to the Auth service
          } else {
            setSubmitStatus('User data is invalid');
          }
        } else {
          setSubmitStatus('Invalid email or password');
        }
      } catch (error) {
        setSubmitStatus('An error occurred');
        console.error('An error occurred', error);
      }
    }

    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="form login-form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            id="email-login"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleInvalidEmail}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            id="password-login"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordChange}
          />
          {passwordError && <div className="text-danger">{passwordError}</div>}
        </div>
        <div className="mb-3">
          <button className="btn btn-dark" type="submit" disabled={submitting}>
            {submitting ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      {submitStatus && <div className="mt-3 alert alert-danger">{submitStatus}</div>}
    </div>
  );
};

export default Login;
