import axios from "axios";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RolesList = () => {
  const [roles, setEmployee] = useState([]);
 

  useEffect(() => {
    axios
      .get("api/roles")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
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
            {roles.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>                
                <td>
                  <Link  to={`/api/roles/` + r.id}  className="btn btn-info btn-sm me-2">Edit</Link>
                  <button  className="btn btn-warning btn-sm"  onClick={() => handleDelete(r.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RolesList;

