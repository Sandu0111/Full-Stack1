import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./internal_css/login.css";
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";

export default function SignIn() {
  const [emplpyee_id, emplpyee_id_update] = useState("");
  const [admin_name, admin_name_update] = useState("");
  const [password, password_update] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);
  const ProceedSignin = (e) => {
    e.preventDefault();
    if (validate()) {
      //console.log('proceed');
      fetch(`http://localhost:8080/admin/${emplpyee_id}`)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);

          if (
            resp.admin_password === password &&
            resp.admin_name === admin_name
          ) {
            toast.success("success");
            sessionStorage.setItem("admin_name", admin_name);
            navigate("/");
          } else {
            toast.error("Please enter valid credintials");
          }
        })
        .catch((err) => {
          toast.error("login failed due to " + err.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (emplpyee_id === "" || emplpyee_id === null) {
      result = false;
      toast.warning("Please enter admin name");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter password");
    }
    return result;
  };

  return (
    <div className="body">
    <div className="container-fluid">
      <div className="header">
        <div className="text">Admin Login</div>
        <div className="underline"></div>
        </div>
        <form onSubmit={ProceedSignin} className="form-container">
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                placeholder="Unique ID"
                value={emplpyee_id}
                onChange={(e) => emplpyee_id_update(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                placeholder="Admin Name"
                value={admin_name}
                onChange={(e) => admin_name_update(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
              placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => password_update(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <div className="forgot-credentials">Forgot Credentials? <Link to={'/ViewAdmin'}>Click Here</Link></div>
            <div className="submit-container">
              <button type="submit" className="btn btn-outline-dark">
                Log In
              </button>
              <Link className="btn btn-outline-dark " to={"/register"}>
                Sign Up
              </Link>
            </div>
            
          </div>
        </form>
      </div>
      </div>
  );
}
