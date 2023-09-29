import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./internal_css/login.css";
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import designation_icon from "./Assets/designation.png";
import phone_icon from "./Assets/phone.png";
function Registration() {
  const [admin_name, admin_name_change] = useState("");
  const [admin_password, admin_password_change] = useState("");
  const [designation, designation_change] = useState("");
  const [admin_email, admin_email_change] = useState("");
  const [phone_number, phone_number_change] = useState("");

  const Navigate = useNavigate();

  const IsValidate = () => {
    let isProceed = true;
    let errmessage = "Please fill the details in "
    if(admin_name===null  || admin_name===''){
        isProceed=false;
        errmessage += ' Admin Name ';
    }
    if(admin_password===null  || admin_password===''){
        isProceed=false;
        errmessage += ' Password ';
    }
    if(admin_email===null  || admin_email===''){
        isProceed=false;
        errmessage += ' Admin Email ';
    }
    if(designation===null  || designation===''){
        isProceed=false;
        errmessage += ' designation ';
    }
    if(phone_number===null  || phone_number===''){
        isProceed=false;
        errmessage += ' phone number ';
    }
    if(!isProceed){
        toast.warning(errmessage);
    }
    else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(admin_email)){

        }
        else{
            isProceed=false;
            toast.warning("Please enter valid email");
        }
    }
    return isProceed;
   
  };

  const handleSubmit = (e) => {
   
      e.preventDefault();
      let regobj = {
        admin_name,
        admin_password,
        designation,
        admin_email,
        phone_number,
      };
      if (IsValidate()) {

      fetch("http://localhost:8080/admin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registerd Successfully");
          Navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed " + err.message);
        });
    }
  };

  return (
    <div className="body">
      <form className="container-fluid" onSubmit={handleSubmit}>
       <div className="header">
        <div className="text">Admin Registration</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
              <div className="input">
              <img src={user_icon} alt="" />
                  <input
                    placeholder="Enter Admin Name"
                    value={admin_name}
                    onChange={(e) => admin_name_change(e.target.value)}
                    className="form-control"
                  ></input>
              </div>
                <div className="input">
                <img src={password_icon} alt="" />
                  <input
                    placeholder="Enter Password"
                    value={admin_password}
                    onChange={(e) => admin_password_change(e.target.value)}
                    type="password"
                    className="form-control"
                  ></input>
                </div>
                <div className="input">
                <img src={designation_icon} alt="" />
                  <input
                  placeholder="Enter your Designation"
                    value={designation}
                    onChange={(e) => designation_change(e.target.value)}
                    type="text"
                    className="form-control"
                  ></input>
                </div>
                <div className="input">
                <img src={email_icon} alt="" />
                  <input
                  placeholder="Enter your Email"
                    value={admin_email}
                    onChange={(e) => admin_email_change(e.target.value)}
                    type="email"
                    className="form-control"
                  ></input>
                </div>
            
                <div className="input">
                <img src={phone_icon} alt="" />
                  <input
                  placeholder="Enter your Phone Number"
                    value={phone_number}
                    onChange={(e) => phone_number_change(e.target.value)}
                    type="number"
                    className="form-control"
                  ></input>
                </div>
              
            
          </div>
          <div className="submit-container">
            <button type="submit" className="btn btn-outline-dark">
              Register
            </button>
            <Link className="btn btn-outline-dark" to ={'/login'}>Back</Link>
          </div>
      </form>
    </div>
  );
}

export default Registration;
