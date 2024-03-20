import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Auth from '../utils/auth';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!Auth.loggedIn()) {
        navigate('/');
      }
    }, [navigate]);

    return Auth.loggedIn() ? <WrappedComponent {...props} /> : null;
  };
};

const UpdateManager = () => {
  const { id } = useParams();
  const [managers, setManager] = useState({
    first_name: '',
    last_name: '',
    email: '',
    role_id: '',
  });

  const location = useLocation();
  const navigate = useNavigate();
  const managerId = location.pathname.split('/')[2];

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setManager((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/managers/${managerId}`, managers);
      navigate('/managers');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      <h1>Edit Manager</h1>
      <form>
        <div className='mb-3 mt-3'>
          <label className='form-label'> ID:</label>
          <input
            type='number'
            className='form-control'
            id='id'
            placeholder='Enter ID'
            name='id'
            value={id}
            disabled
          />
        </div>
        <div className='mb-3 mt-3'>
          <label className='form-label'> First Name: </label>
          <input
            type='text'
            className='form-control'
            id='first_name'
            placeholder='Enter First Name'
            name='first_name'
            value={managers.first_name}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3 mt-3'>
          <label className='form-label'> Last Name: </label>
          <input
            type='text'
            className='form-control'
            id='last_name'
            placeholder='Enter Last Name'
            name='last_name'
            value={managers.last_name}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3 mt-3'>
          <label className='form-label'> Email: </label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter Email'
            name='email'
            value={managers.email}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3 mt-3'>
          <label className='form-label'>Role ID:</label>
          <input
            type='text'
            className='form-control'
            id='role_id'
            placeholder='Enter Role ID'
            name='role_id'
            value={managers.role_id}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary' onClick={handleClick}>Update</button>
      </form>
    </div>
  );
};

export default withAuth(UpdateManager);
