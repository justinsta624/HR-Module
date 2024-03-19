import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
 
const UpdateDepartment = () => {
    const {id} = useParams();
    const [departments, setDepartment] = useState({

        name: "",
        user_id: 1,
    });
 
    const location = useLocation();
    const navigate = useNavigate();
 
    const departmentId = location.pathname.split("/")[2];
 
    const handleChange = (e) => {
        setDepartment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
 
 
    const handleClick = async (e) => {
        e.preventDefault();
 
        try {
            await axios.put(`/api/departments/${departmentId}`, departments);
            navigate("/departments");
        } catch (err) {
            console.log(err);
        }
    };
 
  return (
    <div className="container">
    <h1>Edit Department</h1>
        <form>
                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="integer" className="form-control" id="id" placeholder="Enter ID" name="id" value={id} disabled />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Department Name: </label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Department Name" name="name" value={departments.name} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">User ID:</label>
                    <input type="text" className="form-control" id="user_id" placeholder="Enter User ID" name="user_id" value={departments.user_id}  onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Update</button>
        </form>
    </div>
  );
};
 
export default UpdateDepartment;