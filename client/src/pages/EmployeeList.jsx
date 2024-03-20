import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../utils/auth';
import withAuth from '../components/Auth';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Added navigate from useNavigate()

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
      return;
    }

    axios.get('/api/employees')
      .then(response => {
        setEmployees(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
        setIsLoading(false);
      });
  }, [navigate]); // Added navigate as dependency to useEffect

  const handleDelete = (id) => {
    if (window.confirm('Are You Sure')) {
      axios.delete(`api/employees/${id}`)
        .then(() => {
          // Remove the deleted employee from the state
          setEmployees(employees => employees.filter(employee => employee.id !== id));
          window.alert('Deleted');
        })
        .catch(error => {
          console.error('Error deleting employee:', error);
          window.alert('Failed to delete employee. Please try again later.');
        });
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
