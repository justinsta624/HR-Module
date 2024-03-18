import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App.jsx';
//import Navbar from './components/Navbar';
import DepartmentList from './pages/DepartmentList';
import RoleList from './pages/RoleList';
import EmployeeList from './pages/EmployeeList';
import EmployeeAdd from './pages/EmployeeAdd';
import ManagerList from './pages/ManagerList';
import DepartmentAdd from './pages/DepartmentAdd';
import RoleAdd from './pages/RoleAdd';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import ManagerAdd from './pages/ManagerAdd .jsx';

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
        path: '/employees',
        element: <EmployeeList />,
      },
      {
        path: '/managers',
        element: <ManagerList />,
      },
      {
        path: '/roles',
        element: <RoleList />,
      },
      {
        path: '/employees/add',
        element: <EmployeeAdd />,
      },
      {
        path: '/employees/:id',
        element: <EmployeeAdd />,
      },
      {
        path: '/departments/add',
        element: <DepartmentAdd />,
      },
      {
        path: '/departments/:id',
        element: <DepartmentAdd />,
      },
      {
        path: '/roles/add',
        element: <RoleAdd />,
      },
      {
        path: '/roles/:id',
        element: <RoleAdd />,
      },
      {
        path: '/managers/add',
        element: <ManagerAdd />,
      },  
      {
        path: '/managers/:id',
        element: <ManagerAdd />,
      },  
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
