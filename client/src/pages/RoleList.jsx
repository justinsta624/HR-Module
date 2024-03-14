import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Roles() {
  const [roles, setRoles] = useState([]);
 
  useEffect(() => {
    // Fetch roles when the component mounts
    axios.get('/api/roles')
      .then(response => {
        setRoles(response.data);
      })
      .catch(error => {
        console.error('Error fetching roles:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Roles List</h3>
        </div>
        <Link to="api/roles" className='btn btn-success'>Add Role</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>              
                    </tr>
                </thead>
                <tbody>
                    {roles.map((r) => (
                    <tr>
                      <th>{r.id}</th>
                      <th>{r.title}</th>                     
                    </tr> 
                    ))}
                </tbody>
            </table>
        </div>

    </div>
  );
}

export default Roles;

