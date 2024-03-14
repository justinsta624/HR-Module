import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch departments when the component mounts
    axios.get('/api/departments')
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map(department => (
          <li key={department.id}>{department.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentList;
