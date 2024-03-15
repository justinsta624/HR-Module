import axios from "axios";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RoleList() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('/api/roles')
      .then(response => {
        setRoles(response.data);
      })
      .catch(error => {
        console.error('Error fetching roles:', error);
      });
  }, []);


  const handleDelete = (id) => {
    axios.delete('api/roles'+id)
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
        <h3>Roles List</h3>
      </div>
      <Link to="api/departments" className="btn btn-success"> Add Role</Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Role Id</th>
              <th>Role Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.name}</td>                
                <td>
                  <Link  to={`/api/roles/` + role.id}  className="btn btn-info btn-sm me-2">Edit</Link>
                  <button  className="btn btn-warning btn-sm"  onClick={() => handleDelete(role.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoleList;

