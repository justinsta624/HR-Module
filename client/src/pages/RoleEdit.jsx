import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
 
const UpdateRole = () => {
    const {id} = useParams();
    const [roles, setRole] = useState({
        title: "",
        department_id: "",
    });
 
    const location = useLocation();
    const navigate = useNavigate();
 
    const roleId = location.pathname.split("/")[2];
 
    const handleChange = (e) => {
        setRole((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
 
    const handleClick = async (e) => {
        e.preventDefault();
 
        try {
            await axios.put(`/api/roles/${roleId}`, roles);
            navigate("/roles");
        } catch (err) {
            console.log(err);
        }
    };
 
  return (
    <div className="container">
    <h1>Edit Role</h1>
        <form>
                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="id" placeholder="Enter ID" name="id" value={id} disabled />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Title Name: </label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Title" name="title" value={roles.title} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Department ID:</label>
                    <input type="text" className="form-control" id="department_id" placeholder="Enter Department ID" name="department_id" value={roles.department_id}  onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Update</button>
        </form>
    </div>
  );
};
 
export default UpdateRole;