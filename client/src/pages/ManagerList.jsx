import axios from "axios";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManagerList() {
  const [managers, setManager] = useState([]);
  
  useEffect(() => {
    axios.get('/api/managers')
      .then(response => {
        setManager(response.data);
      })
      .catch(error => {
        console.error('Error fetching managers:', error);
      });
  }, []);


  const handleDelete = (id) => {
    axios.delete('api/managers'+id)
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
        <h3>Manager List</h3>
      </div>
      <Link to="add" className="btn btn-success"> Add Manager</Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
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
                <td>{manager.first_name}</td>
                <td>{manager.last_name}</td>                
                <td>{manager.email}</td>
                <td>{manager.role_id}</td>
                <td>
                  <Link  to={`/managers/` + manager.id}  className="btn btn-info btn-sm me-2">Edit</Link>
                  <button  className="btn btn-warning btn-sm"  onClick={() => handleDelete(manager.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManagerList;