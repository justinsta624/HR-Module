import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RoleList() {
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
    <div>
      <h2>Roles</h2>
      <ul>
        {roles.map(role => (
          <li key={role.id}>{role.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoleList;
