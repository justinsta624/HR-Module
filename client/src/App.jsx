import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import DepartmentList from './components/DepartmentList';
import RoleList from './components/RoleList';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <DepartmentList />
      <RoleList />
      <EmployeeList />
    </>
  );
}

export default App;
