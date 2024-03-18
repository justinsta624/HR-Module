import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const AddManager = () => {
  const { id } = useParams();
  const [managers, setManager] = useState({
    first_name:'',
    last_name:'',
    email:'',
    role:'',
  });
 
  const navigate = useNavigate()
  useEffect(() => {
    if(id && id !== 'add') {
      axios.get('/api/managers/'+id)
      .then(result => {
        setManager(result.data)
      })
      .catch(err => console.log(err))
    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('first_name', managers.first_name);
    formData.append('last_name', managers.last_name);
    formData.append('email', managers.email);
    //formData.append('role', roles.id);

    axios.post('/api/managers/', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/managers')
        } else {
            console.log(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Manager</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          
          <div className="col-12">
            <label htmlFor="inputName" className="form-label"> First Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              value={managers.first_name}
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

{/* TO DO 


figure it out that do we need role ID or role title   


            */ }

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Add Manager</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddManager;
