import axios from "axios";
import  { useState } from "react";
import {  useNavigate } from "react-router-dom";


const AddRole = () => {
  const [roles, setRole] = useState({
    title:"",
    department_id: "",
  });

  const navigate = useNavigate()


  const handleChange = (e) => {
    setRole((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/roles/", roles);
      navigate("/roles");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Role</h3>
        <form className="row g-1" onSubmit={handleChange}>
          
          <div className="col-12">
            <label htmlFor="inputName" className="form-label"> Role Title</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Role Name"
              onChange={(e) =>
                setRole({ ...roles, title: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputName" className="form-label"> Department ID </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Department ID"
              onChange={(e) =>
                setRole({ ...roles, department_id: e.target.value })
              }
            />
          </div>          

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>Add Department</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default AddRole;
