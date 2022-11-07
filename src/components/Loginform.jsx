import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import Userdata from "../Userdata";
// import Login from "./Login";
import Login from "./Login";
import "./Loginform.css";
import Storedata from "./Storedata";
// import Register from "./Register";
// import "./Login.css";

const Loginform = () => {
  const navigate = useNavigate();
  const {
    logindata,
    setlogindata,
    data,
    setdata,
    setloginsuccess,
    setsuccess,
  } = useContext(Storedata);
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    retypepassword: "",
  });

  const getdata = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };
  const demo = (e) => {
    e.preventDefault();

    if (
      userdata.name === "" ||
      userdata.email === "" ||
      userdata.address === "" ||
      userdata.password === "" ||
      userdata.retypepassword === ""
    ) {
      return Swal.fire("Hey User", "You cannot leave any field empty", "error");
    }
    if (userdata.password !== userdata.retypepassword) {
      return Swal.fire(
        "Hey User",
        "Password and Retypepassword should be same",
        "error"
      );
    }
    setlogindata({ ...logindata, userdata });
    Swal.fire("Good Job", "You have successfully registered here!");

    setdata(true);
  };

  function login() {
    setdata(true);
  }
  function register() {
    setdata(false);
  }

  function pagenavigate(e) {
    e.preventDefault();
    setdata(true);
  }

  console.log(userdata);

  return (
    <div className="row data">
      <div className="col-md-6 card-data">
        <h1 className="text-center heading">
          <p className="logo">
            <img src="images/logo.png" alt="error" />
            Express
          </p>
        </h1>
        <div className="container">
          <div className="row data1">
            <div
              className="col space1 text-center"
              onClick={login}
              style={{
                backgroundColor: data ? "  rgba(245, 158, 13, 1) " : "",
                color: data ? "white" : "black",
                borderRadius: "10px",
              }}
            >
              Login
            </div>

            <div
              className="col space1 text-center "
              onClick={register}
              style={{
                backgroundColor: data ? "" : " rgba(245, 158, 13, 1) ",
                color: data ? "black" : "white",
                borderRadius: "10px",
              }}
            >
              Registration
            </div>
          </div>
          <div className="container">
            {data ? (
              <Login />
            ) : (
              <form>
                <div className="form-group form-data">
                  <div className="form-group">
                    <label htmlhtmlFor="inputAddress2">Enter your name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      name="name"
                      onChange={getdata}
                      value={userdata.name}
                    />
                  </div>
                  <label htmlhtmlFor="exampleInputEmail1">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    onChange={getdata}
                    value={userdata.email}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Your data is Secured.
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="inputAddress2">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                    name="address"
                    onChange={getdata}
                    value={userdata.address}
                  />
                </div>
                <div className="form-group">
                  <label htmlhtmlFor="inputAddress2"> password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword13"
                    placeholder="Password"
                    name="password"
                    onChange={getdata}
                    value={userdata.password}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    {" "}
                    Retype Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword12"
                    placeholder="Password"
                    name="retypepassword"
                    onChange={getdata}
                    value={userdata.retypepassword}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary login-button"
                  onClick={demo}
                >
                  Submit
                </button>
                <h6 className="member" onClick={pagenavigate}>
                  You are a Member ?
                  <span className="signup" onClick={register}>
                    SIGN IN
                  </span>
                </h6>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
