import axios from "axios";
import { /*useEffect,*/ useState } from "react";
import { useNavigate } from "react-router-dom";


const DepartmentAdd = () => {
  const [departments, setDepartment] = useState({
    name:'',
  });


  const navigate = useNavigate()
  /*
  const [users, setUser] = useState([]);


 
  useEffect(() => {
    axios
      .get("api/users")
      .then((result) => {
        if (result.data.Status) {
            setUser(result.data.Result);
        } else {
          console.log(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  
  */

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', departments.name);

    axios.post('/api/departments/', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/api/departments')
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
