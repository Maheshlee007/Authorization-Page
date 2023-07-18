import React, { useState, useEffect } from "react";
import LoginRequest from "./loginrequest";
import LoginPageHeader from "./AdminReqpage";
import AdminReq from "./AdminReqpage";

const sampledata = [
  { admin: false, password: "user@gmail.com", username: "user" },
  {
    admin: "admin",
    password: "maheshdharapureddy@gmail.com",
    username: "mahesh",
  },
];

function SuperAdminRole() {
  const [Loginheader, setLoginheader] = useState("SuperAdmin");

  const [Data, setData] = useState({
    username: "",
    admin: false,
    password: "",
  });
  const [accesreq, setAccesReq] = useState(sampledata);

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data.admin);
  };

  const deleterequest = (e, i) => {
    const newdata = accesreq.filter((data, index) => index != i);
    console.log("new", newdata);
    setAccesReq(newdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
    setAccesReq([...accesreq, Data]);
    setData({
      username: "",
      admin: false,
      password: "",
    });
    console.log("data", accesreq);
  };

  return (
    <>
      <h1 className="text-white text-center mb-4 bg-secondary">
        Authorization And Access Page{" "}
      </h1>
      <main className="container-md d-flex justify-content-between bg-dark  mx-2 ">
        <section className="container bg-secondary d-flex flex-column w-25 m-3 p-3">
          <button
            className="btn btn-primary btn-lg my-2"
            onClick={() => setLoginheader("SuperAdmin")}
          >
            Superadmin Login
          </button>
          <button
            className="btn btn-primary btn-lg mb-2"
            onClick={() => setLoginheader("Admin")}
          >
            Admin Login
          </button>
          <button
            className="btn btn-primary btn-lg "
            onClick={() => setLoginheader("User")}
          >
            User Login
          </button>
        </section>
        <section className="w-75 m-3">
          <LoginRequest
            loginHeader={Loginheader}
            handelChange={handleChange}
            data={Data}
            handleSubmit={handleSubmit}
          />
        </section>
      </main>
      {Loginheader == "SuperAdmin" && (
        <AdminReq accessReq={accesreq} handleRequest={deleterequest} />
      )}
      <h3 className="text-white text-center">
       
        All copyrights reserve to @ahesh Dharapureddy
      </h3>
    </>
  );
}

export default SuperAdminRole;
