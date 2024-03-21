import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../utils/auth';
import withAuth from '../components/Auth';

function RoleList() {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
      return;
    }

    axios.get('/api/roles')
      .then(response => {
        setRoles(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching roles:', error);
        setIsLoading(false);
      });
  }, [navigate]);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    axios.delete(`api/roles/${deleteId}`)
      .then(() => {
        setRoles(roles => roles.filter(role => role.id !== deleteId));
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error deleting role:', error);
        setShowModal(false);
        // window.alert('Failed to delete role. Please try again later.');
      });
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  const renderModal = () => {
    return (
      <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Delete</h5>
              <button type="button" className="btn-close" onClick={cancelDelete}></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this role?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={cancelDelete}>Cancel</button>
              <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <h3 className='text-center m-3'>Loading...</h3>;
  }

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h2>Roles List</h2>
      </div>
      <Link to='add' className='btn btn-success'> Add Role</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Role ID</th>
              <th>Role Title</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.title}</td>
                <td>{role.department.name}</td>
                <td>
                  <Link to={`/roles/` + role.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                  <button className='btn btn-warning btn-sm' onClick={() => handleDelete(role.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {renderModal()}
    </div>
  );
}

export default withAuth(RoleList);
