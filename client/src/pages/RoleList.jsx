import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../utils/auth';
import withAuth from '../components/Auth';
import DeleteModal from '../components/DeleteModal';

function RoleList() {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
      return;
    }

    getRoles();
  }, [navigate]);

  const getRoles = async () => {
    try {
      const response = await axios.get('/api/roles');
      setRoles(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching roles:', error);
      setIsLoading(false);
    }
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.get(`/api/roles/${deleteId}`);
      const role = response.data;
      if (role.employees && role.employees.length > 0) {
        setErrorMessage(
          <div>
            <p>{`Cannot delete ${role.title} role. Please remove associated employee(s) first:`}</p>
            <ul>
              {role.employees.map((employee, index) => (
                <li key={index}>{`${employee.first_name} ${employee.last_name}`}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        await deleteRole();
      }
    } catch (error) {
      console.error('Error fetching role details:', error);
      setErrorMessage('Failed to fetch role details. Please try again later.');
    }
  };

  const deleteRole = async () => {
    try {
      await axios.delete(`/api/roles/${deleteId}`);
      setRoles(roles => roles.filter(role => role.id !== deleteId));
      setShowModal(false);
    } catch (error) {
      console.error('Error deleting role:', error);
      setErrorMessage('Failed to delete role. Please try again later.');
    }
  };

  // const renderModal = () => {
  //   return (
  //     <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
  //       <div className="modal-dialog">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h5 className="modal-title">Confirm Delete</h5>
  //             <button type="button" className="btn-close" onClick={cancelDelete}></button>
  //           </div>
  //           <div className="modal-body">
  //             {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
  //             {!errorMessage && 'Are you sure you want to delete this role?'}
  //           </div>
  //           <div className="modal-footer">
  //             <button type="button" className="btn btn-secondary" onClick={cancelDelete}>Cancel</button>
  //             <button type="button" className="btn btn-danger" onClick={confirmDelete} disabled={errorMessage && errorMessage.props.children[1].props.children.length > 0}>Delete</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  if (isLoading) {
    return <h3 className='text-center m-3'>Loading...</h3>;
  }

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h2>Roles List</h2>
      </div>
      <Link to='add' className='btn btn-success'> Add Role</Link>
      <div className='mt-3 card'>
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
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        cancelDelete={cancelDelete}
        confirmDelete={confirmDelete} 
      />
    </div>
  );
}

export default withAuth(RoleList);
