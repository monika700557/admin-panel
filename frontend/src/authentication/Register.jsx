import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { InvoiceLogo1 } from "../_components/Imagepath";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { alphaNumericPattern, emailrgx } from "../assets/constant";
import axios from "axios";

const schema = yup
  .object({
    register_name: yup
      .string()
      .matches(alphaNumericPattern, "Please enter a valid name")
      .required("Please enter your name"),
    register_number: yup
      .number()
      .min(10, "Mobile number must be at least 10 digits")
      .required("Mobile number is required"),
    register_email: yup
      .string()
      .matches(emailrgx, "Please enter a valid email")
      .required("Email is required")
      .trim(),
    register_password: yup
      .string()
      .min(6, "Password must be exactly 6 characters")
      .max(6, "Password must be exactly 6 characters")
      .required("Password is required")
      .trim(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('register_password'), null], 'Passwords must match') // Check if passwords match
      .required("Confirm Password is required")
      .trim(),
  })
  .required();

const Register = () => {
  const history = useHistory();

  const inputValues = {
    register_name: "",
    register_email: "",
    register_number: "",
    register_password: "",
    confirmPassword: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: inputValues,
  });

  const submitForm = async (data) => {
    console.log({ data });
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        data
      );

      if (response.data.status) {
        history.push("/login");
      } else {
        console.log("Registration failed: ", response.data.msg);
      }
    } catch (error) {
      console.error("Error during registration: ", error);
    }

    reset();
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

                <form onSubmit={handleSubmit(submitForm)}>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Name</label>
                    <input
                      {...register("register_name")}
                      className="form-control"
                      type="text"
                    />
                    <p className="text-danger mt-1">
                      {errors.register_name?.message}
                    </p>
                  </div>

                  <div className="input-block mb-3">
                    <label className="form-control-label">Mobile Number</label>
                    <input
                      {...register("register_number")}
                      className="form-control"
                      type="text"
                    />
                    <p className="text-danger mt-1">
                      {errors.register_number?.message}
                    </p>
                  </div>

                  <div className="input-block mb-3">
                    <label className="form-control-label">Email Address</label>
                    <input
                      {...register("register_email")}
                      className="form-control"
                      type="text"
                    />
                    <p className="text-danger mt-1">
                      {errors.register_email?.message}
                    </p>
                  </div>

                  <div className="input-block mb-3">
                    <label className="form-control-label">Password</label>
                    <input
                      {...register("register_password")}
                      className="form-control"
                      type="password"
                    />
                    <p className="text-danger mt-1">
                      {errors.register_password?.message}
                    </p>
                  </div>

                  <div className="input-block mb-3">
                    <label className="form-control-label">
                      Confirm Password
                    </label>
                    <input
                      {...register("confirmPassword")} // Register the confirmPassword field
                      className="form-control"
                      type="password"
                    />
                    <p className="text-danger mt-1">
                      {errors.confirmPassword?.message}
                    </p>
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

                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>
                <div className="social-login">
                  <span>Register with</span>
                  <Link to="#" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#" className="google">
                    <i className="fab fa-google"></i>
                  </Link>
                </div>
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
