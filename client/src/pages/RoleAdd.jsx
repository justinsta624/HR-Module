import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

const AddRole = () => {
  const [roles, setRole] = useState({
    title: '',
    department_id: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setRole((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/roles/', roles);
      navigate('/roles');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
      <div className='p-3 rounded w-50 border'>
        <h3 className='text-center'>Add Role</h3>
        <form className='row g-1' onSubmit={handleClick}>
          <div className='col-12'>
            <label htmlFor='inputName' className='form-label'> Role Title</label>
            <input
              type='text'
              className='form-control rounded-0'
              id='inputName'
              placeholder='Enter Role Name'
              name='title'
              value={roles.title}
              onChange={handleChange}
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputName' className='form-label'> Department ID </label>
            <input
              type='text'
              className='form-control rounded-0'
              id='inputName'
              placeholder='Enter Department ID'
              name='department_id'
              value={roles.department_id}
              onChange={handleChange}
            />
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary w-100'>Add Role</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withAuth(AddRole); // Wrap AddRole with withAuth HOC
