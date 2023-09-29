import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Layout/Navbar";

export default function ViewUser() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        gender:"",
        age:""
    })
    const navigate=useNavigate();

    const {id} = useParams();
    useEffect(()=>{
        loadUser()

    },[])


    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

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
            <h2 className="text-center m-4">User Details</h2>
            <div className="card">
                <div className="card-header">
                    Details of User Id : {user.id}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Name :</b>
                            {user.name}
                        </li>
                        <li className="list-group-item">
                            <b>Email :</b>
                            {user.email}
                        </li>
                        <li className="list-group-item">
                            <b>Gender :</b>
                            {user.gender}
                        </li>
                        <li className="list-group-item">
                            <b>Age :</b>
                            {user.age}
                        </li>
                    </ul>
                </div>

            </div>
            <Link className="btn btn-outline-primary my-2" to="/">
              Back to Home
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
