import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Layout/Navbar";

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();
  const {id} = useParams ()

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(()=>{
    let admin_name=sessionStorage.getItem('admin_name');
    if(admin_name==='' || admin_name===null){
      navigate('/login');
    }
  },[]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
  }

  return (
    <div>
      <Navbar />
    <div className="container">
      <div className="py-4">
      
        <table className="table border shadow">
          <thead>
           
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>
                    <Link className="btn btn-outline-primary mx-2" to = {`/viewuser/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-dark mx-2" to = {`/edituser/${user.id}`}>Edit</Link>
                    <button className="btn btn-outline-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-outline-secondary" to="/add_user">AddUser</Link>
      </div>
    </div>
    </div>
  );
}
