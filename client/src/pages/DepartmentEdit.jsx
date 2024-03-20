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

const UpdateDepartment = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState({
    name: '',
    user_id: 1,
  });
  const navigate = useNavigate();

  const location = useLocation();
  const departmentId = location.pathname.split('/')[2];

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
      return;
    }
  }, [navigate]);

  const handleChange = (e) => {
    setDepartment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/departments/${departmentId}`, department);
      navigate('/departments');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      <h1>Edit Department</h1>
      <form>
        <div className='mb-3 mt-3'>
          <label className='form-label'> ID:</label>
          <input
            type='integer'
            className='form-control'
            id='id'
            placeholder='Enter ID'
            name='id'
            value={id}
            disabled
          />
        </div>
        <div className='mb-3 mt-3'>
          <label className='form-label'> Department Name: </label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter Department Name'
            name='name'
            value={department.name}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3 mt-3'>
          <label className='form-label'>User ID:</label>
          <input
            type='text'
            className='form-control'
            id='user_id'
            placeholder='Enter User ID'
            name='user_id'
            value={department.user_id}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary' onClick={handleClick}>
          Update
        </button>
      </form>
    </div>
  );
};

export default withAuth(UpdateDepartment);
