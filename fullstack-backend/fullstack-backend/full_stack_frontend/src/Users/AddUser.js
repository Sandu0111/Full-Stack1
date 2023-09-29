import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
  });
  const { name, email, gender, age } = user;
  

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };
  useEffect(()=>{
    let admin_name=sessionStorage.getItem('admin_name');
    if(admin_name==='' || admin_name===null){
      navigate('/login');
    }
  },[]);

  return (
    <div>
      <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Employee Name"
                name="name"
                required value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Employee Email"
                name="email"
                required value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Gender" className="form-label">
                Gender
              </label>
              <select
                type={"text"}
                className="form-control"
                name="gender"
                required value={gender}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Please choose your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="Age" className="form-label">
                Age (must be in between 18 -60)
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Employee Age"
                name="age"
                min="18"
                max="60"
                required value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
