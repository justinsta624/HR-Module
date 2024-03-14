import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddEmployee = () => {
  const [employees, setEmployee] = useState({
    fist_name:'',
    last_name:'',
    email:'',
    salary:'',
    manager:'',
    role:'',
  });
  const [roles, setRole] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("api/roles")
      .then((result) => {
        if (result.data.Status) {
            setRole(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('first_name', employees.first_name);
    formData.append('last_name', employees.last_name);
    formData.append('email', employees.email);
    formData.append('salary', employees.salary);
    formData.append('manager', employees.is_manager);
    formData.append('role', roles.id);

    axios.post('/api/employees/', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/api/employees')
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          
          <div className="col-12">
            <label htmlFor="inputName" className="form-label"> First Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employees, name: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employees, name: e.target.value })
              }
            />
          </div>



          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employees, email: e.target.value })
              }
            />
          </div>

          <div className="col-12">

            <label htmlFor="inputSalary" className="form-label">Salary</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employees, salary: e.target.value })
              }
            />
          </div>
{/* TO DO 


find a solution for manager is true or false situation and figure it out that do we need role ID or role title   


            */ }

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
