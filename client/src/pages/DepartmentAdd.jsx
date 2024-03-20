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

const AddDepartment = () => {
  const [departments, setDepartment] = useState({
    name: '',
    user_id: 1
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setDepartment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/departments/', departments);
      navigate('/departments');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
      <div className='p-3 rounded w-50 border'>
        <h3 className='text-center'>Add Department</h3>
        <form className='row g-1' onSubmit={handleChange}>
          <div className='col-12'>
            <label htmlFor='inputName' className='form-label'> Department Name</label>
            <input
              type='text'
              className='form-control rounded-0'
              id='inputName'
              placeholder='Enter Department Name'
              onChange={(e) => setDepartment({ ...departments, name: e.target.value })}
            />
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary w-100' onClick={handleClick}>Add Department</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withAuth(AddDepartment); // Wrap AddDepartment with withAuth HOC
