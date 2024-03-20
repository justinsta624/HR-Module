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

function ManagerList() {
  const [managers, setManagers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
      return;
    }

    axios.get('/api/managers')
      .then(response => {
        setManagers(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching managers:', error);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are You Sure')) {
      axios.delete(`api/managers/${id}`);
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
        <h3>Manager List</h3>
      </div>
      <Link to='add' className='btn btn-success'> Add Manager</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager) => (
              <tr key={manager.id}>
                <td>{manager.id}</td>
                <td>{manager.first_name}</td>
                <td>{manager.last_name}</td>
                <td>{manager.email}</td>
                <td>{manager.role_id}</td>
                <td>
                  <Link to={`/managers/` + manager.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                  <button className='btn btn-warning btn-sm' onClick={() => handleDelete(manager.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withAuth(ManagerList);
