import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function ViewAdmin() {
  const [admins, setAdmin] = useState([]);
  const navigate=useNavigate();
  const {id} = useParams ()

  useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/admin");
    setAdmin(result.data);
  };

  return (
    <div>
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <td colSpan={7}><h3>Instead of Forgot Password we are showing Admin Databse</h3></td>
           
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Unique ID</th>
              <th scope="col">Admin Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Designation</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr>
                <td scope="row" key={index}>
                  {index + 1}
                </td>
                <th>{admin.employee_id}</th>
                <th>{admin.admin_name}</th>
                <td>{admin.admin_email}</td>
                <th>{admin.admin_password}</th>
                <td>{admin.designation}</td>
                <td>{admin.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-outline-secondary" to="/login">Go Back</Link>
      </div>
    </div>
    </div>
  );
}
