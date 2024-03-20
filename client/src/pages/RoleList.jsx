import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RoleList() {
  const [roles, setRoles] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/api/roles')
      .then(response => {
        setRoles(response.data);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("api/roles/"+id);
      navigate("/roles");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Roles List</h3>
      </div>
      <Link to="add" className="btn btn-success"> Add Role</Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Role Id</th>
              <th>Role Title</th>
              <th>Department ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.title}</td>  
                <td>{role.department_id}</td>  
                <td>
                  <Link  to={`/roles/` + role.id}  className="btn btn-info btn-sm me-2">Edit</Link>
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

