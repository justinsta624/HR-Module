import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import DepartmentList from './pages/DepartmentList';
import RoleList from './pages/RoleList';
import EmployeeList from './pages/EmployeeList';
import EmployeeAdd from './pages/EmployeeAdd';


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <DepartmentList />
      <RoleList />
      <EmployeeList />
      <EmployeeAdd />      
    </>
  );
}

export default App;
