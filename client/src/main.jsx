import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
//import Navbar from './components/Navbar';
import DepartmentList from './pages/DepartmentList';
import DepartmentAdd from './pages/DepartmentAdd';
import DepartmentEdit from './pages/DepartmentEdit';

import RoleList from './pages/RoleList';
import RoleAdd from './pages/RoleAdd';
import RoleEdit from './pages/RoleEdit';

import EmployeeList from './pages/EmployeeList';
import EmployeeAdd from './pages/EmployeeAdd';
import EmployeeEdit from './pages/EmployeeEdit';

import ManagerList from './pages/ManagerList';
import ManagerAdd from './pages/ManagerAdd';
import ManagerEdit from './pages/ManagerEdit';

import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: '/departments',
        element: <DepartmentList />,
      },
      {
        path: '/departments/add',
        element: <DepartmentAdd />,
      },
      {
        path: '/departments/:id',
        element: <DepartmentEdit />,
      },      
      {
        path: '/employees',
        element: <EmployeeList />,
      },
      {
        path: '/employees/add',
        element: <EmployeeAdd />,
      },
      {
        path: '/employees/:id',
        element: <EmployeeEdit />,
      },       
      {
        path: '/managers',
        element: <ManagerList />,
      },
      {
        path: '/managers/add',
        element: <ManagerAdd />,
      },  
      {
        path: '/managers/:id',
        element: <ManagerEdit />,
      },        
      {
        path: '/roles',
        element: <RoleList />,
      },
      {
        path: '/roles/add',
        element: <RoleAdd />,
      },
      {
        path: '/roles/:id',
        element: <RoleEdit />,
      },
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
