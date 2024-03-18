import axios from "axios";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

  function EmployeeList() {
    const [employees, setEmployee] = useState([]);
    
    useEffect(() => {
      axios.get('/api/employees')
        .then(response => {
          setEmployee(response.data);
        })
        .catch(error => {
          console.error('Error fetching employees:', error);
        });
    }, []);

  const handleDelete = (id) => {
    axios.delete('api/employees'+id)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            alert(result.data.Error)
        }
    })
  } 
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="add" className="btn btn-success"> Add Employee</Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
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
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>                
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.role_id}</td>
                <td>
                  <Link  to={`/employees/` + employee.id}  className="btn btn-info btn-sm me-2">Edit</Link>
                  <button  className="btn btn-warning btn-sm"  onClick={() => handleDelete(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;