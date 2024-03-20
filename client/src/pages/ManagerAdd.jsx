import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddManager = () => {

  const [managers, setManager] = useState({
    first_name:'',
    last_name:'',
    email:'',
    role_id: ''
  });

  const navigate = useNavigate()


  const handleChange = (e) => {
    setManager((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/managers", managers);
      navigate("/managers");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
       <h1>Add Manager</h1>
        <form>

        <div className="mb-3 mt-3">
            <label className="form-label"> First Name: </label>
            <input type="text" className="form-control" id="first_name" placeholder="Enter First Name" name="first_name" value={managers.first_name} onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
            <label className="form-label"> Last Name: </label>
            <input type="text" className="form-control" id="last_name" placeholder="Enter Last Name" name="last_name" value={managers.last_name} onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
            <label className="form-label"> Email: </label>
            <input type="email" className="form-control" id="email" placeholder="Enter E-Mail" name="email" value={managers.email} onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
            <label className="form-label">Role ID:</label>
            <input type="text" className="form-control" id="role_id" placeholder="Enter Role ID" name="role_id" value={managers.role_id}  onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Manager</button>
        </form>
    </div>
  );
};
export default AddManager;
