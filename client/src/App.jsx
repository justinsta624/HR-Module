import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import DepartmentList from './pages/DepartmentList';

{/* 
import RoleList from './pages/RoleList';
import EmployeeList from './pages/EmployeeList';
import EmployeeAdd from './pages/EmployeeAdd';
*/}



function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <DepartmentList />
  {/* <RoleList /> */} 
  {/* <EmployeeList /> */} 
  {/* <EmployeeAdd />  */}  
    </>
  );
}

export default App;


{/*  for conditional rendering => create a page named PortfolioContainer under components folder or under src folder

import { useState } from 'react';
import NavBar from './components/Navbar';
import DepartmentList from './pages/DepartmentList';
import RoleList from './pages/RoleList';
import EmployeeList from './pages/EmployeeList';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Departments') {
      return <DepartmentList />;
    }
    if (currentPage === 'Roles') {
      return <RoleList />;
    }
    if (currentPage === 'Employees') {
      return <EmployeeList />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}


*/}