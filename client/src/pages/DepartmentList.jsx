import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('/api/departments')
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []);

 
  const handleDelete = (id) => {
    axios.delete('api/departments/'+id)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            console.log(result.data.Error)
        }
    })
  } 


  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Departments List</h3>
      </div>
      <Link to="add" className="btn btn-success"> Add Department</Link> 
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
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
                  <Link  to={`/departments/` + department.id}  className="btn btn-info btn-sm me-2">Edit</Link>
                  <button  className="btn btn-warning btn-sm"  onClick={() => handleDelete(department.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartmentList;
