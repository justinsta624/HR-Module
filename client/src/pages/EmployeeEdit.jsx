import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
 
const UpdateEmployee = () => {
    const {id} = useParams();
    const [employees, setEmployee] = useState({

        first_name:"",
        last_name:"",
        email:"",
        salary:"",
        is_manager:"",
        role_id:"",

    });
 
    const location = useLocation();
    const navigate = useNavigate();
 
    const employeeId = location.pathname.split("/")[2];
 
    const handleChange = (e) => {
        setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
 
    const handleClick = async (e) => {
        e.preventDefault();
 
        try {
            await axios.put(`/api/employees/${employeeId}`, employees);
            navigate("/employees");
        } catch (err) {
            console.log(err);
        }
    };
 
  return (
    <div className="container">
    <h1>Edit Employee</h1>
        <form>
                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="number" className="form-control" id="id" placeholder="Enter ID" name="id" value={id} disabled />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> First Name: </label>
                    <input type="text" className="form-control" id="first_name" placeholder="Enter First Name" name="first_name" value={employees.first_name} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Last Name: </label>
                    <input type="text" className="form-control" id="last_name" placeholder="Enter Last Name" name="last_name" value={employees.last_name} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Email: </label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" value={employees.email} onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label">Salary:</label>
                    <input type="number" className="form-control" id="salary" placeholder="Enter Salary" name="salary" value={employees.salary}  onChange={handleChange}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Manager:</label>
                    <input type="text" className="form-control" id="is_manager" placeholder="Enter 0 (zero) or 1 (one)" name="is_manager" value={employees.is_manager}  onChange={handleChange}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Role ID:</label>
                    <input type="number" className="form-control" id="role_id" placeholder="Enter User ID" name="role_id" value={employees.role_id}  onChange={handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Update</button>
        </form>
    </div>
  );
};
 
export default UpdateEmployee;