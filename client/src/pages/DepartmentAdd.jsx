import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const DepartmentAdd = () => {
  const { id } = useParams();
  const [departments, setDepartment] = useState({
    name:'',
  });
  useEffect(() => {
    if(id && id !== 'add') {
      axios.get('/api/departments/'+id)
      .then(result => {
        setDepartment(result.data)
      })
      .catch(err => console.log(err))
    }
  }, [id])
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', departments.name);

    axios.post('/api/departments/', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/departments')
        } else {
            console.log(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Department</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          
          <div className="col-12">
            <label htmlFor="inputName" className="form-label"> Department Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Department Name"
              value={departments.name}
              defaultValue={departments.name}
              onChange={(e) =>
                setDepartment({ ...departments, name: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Add Department</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentAdd;
