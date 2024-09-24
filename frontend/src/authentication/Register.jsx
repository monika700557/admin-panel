import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { InvoiceLogo1 } from "../_components/Imagepath";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { alphaNumericPattern, emailrgx } from "../assets/constant";
import axios from 'axios';

const schema = yup
  .object({
    name: yup
      .string()
      .matches(alphaNumericPattern, "please enter a valid name")
      .required("Please enter your name"),
    email: yup
      .string()
      .matches(emailrgx, "Email is required")
      .required("Email is required")
      .trim(),
    password: yup
      .string()
      .min(6)
      .max(6)
      .required("Password is required")
      .trim(),

    confirmPassword: yup
      .string()
      .min(6)
      .max(6)
      .required("Confirm Password is required")
      .trim(),
  })
  .required();

const Register = () => {
  const history = useHistory();

  const inputValues = {
    register_name: "",
    register_email: "",
    register_password: "",
  };

  const { handleSubmit, setError, clearErrors } = useForm({
    resolver: yupResolver(schema),
    defaultValues: inputValues,
  });

  const [inputData, setInputdata] = useState(inputValues);

  const handleData = (e) => {
    setInputdata({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", inputData);
      console.log(response);

      if (response.data.status) {
        // Redirect to login on successful registration
        history.push("/login");
      } else {
        console.log("Registration failed: ", response.data.msg);
      }
    } catch (error) {
      console.error("Error during registration: ", error);
    }
  };

  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <img
            className="img-fluid logo-dark mb-2"
            src={InvoiceLogo1}
            alt="Logo"
          />

          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Register</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                {/* Form */}
                <form onSubmit={handleSubmit(submitForm)}>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="register_name"
                      value={inputData.register_name}
                      onChange={handleData}
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Email Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="register_email"
                      value={inputData.register_email}
                      onChange={handleData}
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="register_password"
                      value={inputData.register_password}
                      onChange={handleData}
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Confirm Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="confirm_password"
                      onChange={handleData}
                    />
                  </div>
                  <div className="input-block mb-0">
                    <button
                      type="submit"
                      className="btn btn-lg btn-block btn-primary w-100"
                    >
                      Register
                    </button>
                  </div>
                </form>
                {/* /Form */}

                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>
                {/* Social Login */}
                <div className="social-login">
                  <span>Register with</span>
                  <Link to="#" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#" className="google">
                    <i className="fab fa-google"></i>
                  </Link>
                </div>
                {/* /Social Login */}
                <div className="text-center dont-have">
                  Already have an account? <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
