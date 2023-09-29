import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import ViewUser from "./Users/ViewUser";
import Registration from "./Registration";
import { ToastContainer } from "react-toastify";
import SignIn from "./signin";
import ViewAdmin from "./ViewAdmins";




function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Register" element={<Registration />} />
          <Route exact path="/Login" element={<SignIn />} />
          <Route exact path="/ViewAdmin" element={<ViewAdmin />} />
          <Route exact path="/add_user" element={<AddUser />} />
          <Route exact path="edituser/:id" element={<EditUser />} />
          <Route exact path="viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
