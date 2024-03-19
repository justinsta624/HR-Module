import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddManager = () => {
  const [managers, setManager] = useState({
    first_name:'',
    last_name:'',
    email:'',
    role_id:'',
  });
 
  const navigate = useNavigate()


  const handleChange = (e) => {
    setManager((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/managers/", managers);
      navigate("/managers");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Manager</h3>
        <form className="row g-1" onSubmit={handleChange}>
          
          <div className="col-12">
            <label htmlFor="inputName" className="form-label"> First Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter First Name"
              onChange={(e) =>
                setManager({ ...managers, first_name: e.target.value })
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
                setManager({ ...managers, last_name: e.target.value })
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
                setManager({ ...managers, email: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputText" className="form-label">Role ID</label>
            <input
              type="number"
              className="form-control rounded-0"
              id="text"
              placeholder="Enter Role ID"
              autoComplete="off"
              onChange={(e) =>
                setManager({ ...managers, role_id: e.target.value })
              }
            />
          </div>
       

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>Add Manager</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddManager;
