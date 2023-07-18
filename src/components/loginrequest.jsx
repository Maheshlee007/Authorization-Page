import React, { useState } from "react";

const LoginRequest = ({ loginHeader, handelChange, data, handleSubmit }) => {
  return (
    <aside className="bg-white d-flex flex-column">
      <h1 className="text-center bg-warning text-dark ">
        {loginHeader} {loginHeader == "SuperAdmin" ? " Access" : " Request"}
      </h1>
      {loginHeader == "SuperAdmin" && (
        <div className="mx-5 p-3 w-100">
          <h1>Assuming That super admin is already logged In.... </h1>
          <h2>Now Super Admin can Grants or Reject Access </h2>
        </div>
      )}
      {loginHeader != "SuperAdmin" && (
        <form
          className="mx-auto  p-5 "
          onSubmit={handleSubmit}
          // style={{width:"400px"}}
        >
          <div className="mb-3 mt-3  ">
            <label htmlFor="uname" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Enter username"
              name="username"
              value={data.username}
              onChange={handelChange}
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="mb-3 ">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              type="email"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              required
              value={data.password}
              onChange={handelChange}
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          {loginHeader == "Admin" && (
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="myCheck"
                name="admin"
                onChange={handelChange}
                value="admin"
                checked={data.admin}
                required
              />
              <label className="form-check-label" htmlFor="myCheck">
                Check this to request Admin Access
              </label>
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback"></div>
            </div>
          )}
          <div className="text-center ">
            <button type="submit " className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}
    </aside>
  );
};

export default LoginRequest;
