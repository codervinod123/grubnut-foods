import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Register.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log(`vinod ${res.status} `);

    const data = await res.json();
    if (res.status === 400) {
      console.log("1")
      toast.error(data.Message, { theme: "dark" });
    } else {
          console.log("2")
          localStorage.setItem("user-lodsdsdgged-in",JSON.stringify(data.user));
    }
  };

  
  return (
    <div className="register_container">
      <div className="form_container">
        {/* <Navbar /> */}
        <form onSubmit={(e) => handleSubmit(e)} className="from">
          <p>START FOR FREE</p>
          <h2>Log in account</h2>
          <span>
            New Member ? <Link to="/register">Register</Link>
          </span>

          <input
            type="email"
            placeholder="Enter User Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />

          <input
            type="password"
            placeholder="Enter User Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <div className="btn_container">
            {/* <button className='button change_pass' >Change Password</button> */}
            <button type="submit" className="button create_acc">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
