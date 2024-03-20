import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../utils/auth'; // Importing the Auth service

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

function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in before fetching departments
    if (!Auth.loggedIn()) {
      // If user is not logged in, redirect to login page
      navigate('/');
      return;
    }

    axios.get('/api/departments')
      .then(response => {
        setDepartments(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
        setIsLoading(false);
      });
  }, [navigate]);

  const handleDelete = (id) => {
    if (window.confirm('Are You Sure')) {
      axios.delete(`api/departments/${id}`);
      window.confirm('Deleted');
      window.location.reload();
    }
  };

  // If loading, show loading indicator
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Departments List</h3>
      </div>
      <Link to='add' className='btn btn-success'> Add Department</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Department Name</th>
              <th>User Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>{department.user_id}</td>
                <td>
                  <Link to={`/departments/` + department.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                  <button className='btn btn-warning btn-sm' onClick={() => handleDelete(department.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Wrap the DepartmentList component with the withAuth HOC
export default withAuth(DepartmentList);