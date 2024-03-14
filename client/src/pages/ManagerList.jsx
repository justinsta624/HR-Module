import axios from "axios";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManagerList = () => {
  const [managers, setManager] = useState([]);


  useEffect(() => {
    axios
      .get("api/managers")
      .then((result) => {
        if (result.data.Status) {
          setManager(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios.delete('api/managers'+id)
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
        <h3>Manager List</h3>
      </div>
      <Link to="api/managers" className="btn btn-success"> Add Manager</Link>
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
            {managers.map((e) => (
              <tr key={e.id}>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>                
                <td>{e.email}</td>
                <td>{e.role_id}</td>
                <td>
                  <Link  to={`/api/managers/` + e.id}  className="btn btn-info btn-sm me-2">Edit</Link>
                  <button  className="btn btn-warning btn-sm"  onClick={() => handleDelete(e.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerList;