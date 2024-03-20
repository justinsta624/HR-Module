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

const AddEmployee = () => {
  const [employees, setEmployee] = useState({
    first_name: '',
    last_name: '',
    email: '',
    salary: '',
    is_manager: '',
    role_id: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/employees/', employees);
      navigate('/employees');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
      <div className='p-3 rounded w-50 border'>
        <h3 className='text-center'>Add Employee</h3>
        <form className='row g-1'>
          <div className='col-12'>
            <label htmlFor='inputName' className='form-label'> First Name</label>
            <input
              type='text'
              className='form-control rounded-0'
              id='inputName'
              placeholder='Enter First Name'
              onChange={handleChange}
              name='first_name'
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputName' className='form-label'>Last Name</label>
            <input
              type='text'
              className='form-control rounded-0'
              id='inputName'
              placeholder='Enter Last Name'
              onChange={handleChange}
              name='last_name'
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputEmail4' className='form-label'>Email</label>
            <input
              type='email'
              className='form-control rounded-0'
              id='inputEmail4'
              placeholder='Enter Email'
              autoComplete='off'
              onChange={handleChange}
              name='email'
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputSalary' className='form-label'>Salary</label>
            <input
              type='number'
              className='form-control rounded-0'
              id='inputSalary'
              placeholder='Enter Salary'
              autoComplete='off'
              onChange={handleChange}
              name='salary'
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputManager' className='form-label'>Manager</label>
            <input
              type='text'
              className='form-control rounded-0'
              id='inputManager'
              placeholder='Input 0 or 1'
              autoComplete='off'
              onChange={handleChange}
              name='is_manager'
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputRole' className='form-label'>Role ID</label>
            <input
              type='number'
              className='form-control rounded-0'
              id='inputRole'
              placeholder='Enter Role ID'
              autoComplete='off'
              onChange={handleChange}
              name='role_id'
            />
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary w-100' onClick={handleClick}>Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withAuth(AddEmployee); // Wrap AddEmployee with withAuth HOC
