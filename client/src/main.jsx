import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx';
//import Navbar from './components/Navbar';
import DepartmentList from './pages/DepartmentList';
import RoleList from './pages/RoleList';
import EmployeeList from './pages/EmployeeList';
import EmployeeAdd from './pages/EmployeeAdd';
import ManagerList from './pages/ManagerList';
import DepartmentAdd from './pages/DepartmentAdd';
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
        path: 'api/departments',
        element: <DepartmentList />,
      },
      {
        path: 'api/employees',
        element: <EmployeeList />,
      },
      {
        path: 'api/managers',
        element: <ManagerList />,
      },
      {
        path: 'api/roles',
        element: <RoleList />,
      },
      {
        path: 'api/employees/add',
        element: <EmployeeAdd />,
      },
      {
        path: 'add',
        element: <DepartmentAdd />,
      },
    /*  {
        path: 'api/login',
        element: <LoginPage />,
      }, */
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
