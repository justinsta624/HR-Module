import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

function EmployeeList() {
  const [employees, setEmployee] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
      return;
    }

    axios.get('/api/employees')
      .then(response => {
        setEmployee(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are You Sure')) {
      axios.delete(`api/employees/${id}`);
      window.confirm('Deleted');
      window.location.reload();
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Employee List</h3>
      </div>
      <Link to='add' className='btn btn-success'> Add Employee</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.role_id}</td>
                <td>
                  <Link to={`/employees/` + employee.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                  <button className='btn btn-warning btn-sm' onClick={() => handleDelete(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withAuth(EmployeeList);