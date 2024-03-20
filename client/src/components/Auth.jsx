import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';

// Higher-order component for authentication check
const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      // Check if user is logged in
      if (!Auth.loggedIn()) {
        // If user is not logged in, redirect to login page
        navigate('/');
      }
    }, [navigate]);

    // Render the wrapped component if user is logged in
    return Auth.loggedIn() ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
