import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddEmployee = () => {
  const [employees, setEmployee] = useState({
    first_name:'',
    last_name:'',
    email:'',
    salary:'',
    is_manager:"",
    role_id:'',
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/employees/", employees);
      navigate("/employees");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleChange}>

       
          <div className="col-12">
            <label htmlFor="inputName" className="form-label"> First Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter First Name"
              onChange={(e) =>
                setEmployee({ ...employees, first_name: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Last Name"
              onChange={(e) =>
                setEmployee({ ...employees, last_name: e.target.value })
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
              type="number"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employees, salary: e.target.value })
              }
            />
          </div>  
          <div className="col-12">

            <label htmlFor="inputManager" className="form-label">Manager</label>
            
            <input
              type="text"
              className="form-control rounded-0"
              id="inputManager"
              placeholder="Input 0 or 1"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employees, is_manager: e.target.value })
              }
            />
          </div> 

          <div className="col-12">

            <label htmlFor="inputRole" className="form-label">Role ID</label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputRole"
              placeholder="Enter Role ID"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employees, role_id: e.target.value })
              }
            />
          </div>           

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
