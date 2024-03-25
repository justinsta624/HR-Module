// importing necessary modules and components
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../utils/auth';
import withAuth from '../components/Auth';
import DeleteModal from '../components/DeleteModal';
import '../styles/Modal.css';
import { CSVLink } from "react-csv";

// Define the DepartmentList component to display the list of departments
function DepartmentList() {
  // Define state variables using useState hook
  const [departments, setDepartments] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Fetch the list of departments from the API
  useEffect(() => {
    // Check if user is logged in before fetching departments
    if (!Auth.loggedIn()) {
      // If user is not logged in, redirect to login page
      navigate('/');
      return;
    }

    getAllDepartments();
  }, [navigate]);

  const Filter = (event) => {
    setDepartments(records.filter(department =>
      department.name.toLowerCase().includes(event.target.value)

    ))
  }

  // Define a function to fetch all departments from the API
  const getAllDepartments = async () => {
    try {
      const response = await axios.get('/api/departments');
      setDepartments(response.data);
      setRecords(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching all departments:', error);
      setIsLoading(false);
    }
  };

  // Define a function to fetch a single department by ID
  const getSingleDepartment = async (deleteId) => {
    try {
      const response = await axios.get(`/api/departments/${deleteId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching individual department:', error);
    }
  };

  // Define a function to delete a department
  const deleteDepartment = async (deleteId) => {
    try {
      await axios.delete(`/api/departments/${deleteId}`);
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  // Define the handleDelete function to show the modal
  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true)
  };

  // Define the confirmDelete function to delete the department
  const confirmDelete = async () => {
    try {
      const department = await getSingleDepartment(deleteId);
      const associatedRoles = department.roles.map(role => role.title);
      if (associatedRoles.length > 0) {
        setShowModal(true);
        setErrorMessage(
          <div>
            <p>{`Cannot delete ${department.name} department. Please remove associated roles first:`}</p>
            <ul>
              {associatedRoles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        await deleteDepartment(deleteId);
        setDepartments(departments => departments.filter(department => department.id !== deleteId));
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error during delete operation:', error);
      setShowModal(true);
      setErrorMessage(error.message);
    }
  };

  // Define the cancelDelete function to close the modal
  const cancelDelete = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  // If loading, show loading indicator
  if (isLoading) {
    return <h3 className='text-center m-3'>Loading...</h3>;
  }

  // Render the list of departments in a table format with edit and delete buttons for each department
  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h2>Departments List</h2>
      </div>
      <div className='d-flex justify-content-between'>
        <Link to='add' className='btn btn-success'> Add Department</Link>
        <CSVLink className='btn btn-dark' data={departments}>Export To CSV</CSVLink>
      </div>
      <div className='mt-3 card'>
        <input
          type="text"
          className='form-control'
          placeholder='Type to Search'
          onChange={Filter}
        />
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th>Department ID</th>
              <th>Department Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>
                  <Link to={`/departments/` + department.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                  <button className='btn btn-warning btn-sm' onClick={() => handleDelete(department.id)}>Delete</button>
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

// Wrap the DepartmentList component with the withAuth HOC for authentication
export default withAuth(DepartmentList);