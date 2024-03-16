import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddRole = () => {
  const [roles, setRole] = useState({
    title:'',
  });

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', roles.title);


    axios.post('/api/roles/', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/roles')
        } else {
            console.log(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Role</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          
          <div className="col-12">
            <label htmlFor="inputName" className="form-label"> Role Title</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Role"
              onChange={(e) =>
                setRole({ ...roles, title: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Add Role</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRole;
