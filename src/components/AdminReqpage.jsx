import React, { useState } from "react";

const AdminReq = ({ accessReq, handleRequest }) => {
  console.log(accessReq);
  return (
    <>
      <section className="mt-5 ms-4 table-responsive">
        <h1 className="text-warning ">Admin Request status</h1>
        {accessReq.length > 0 && (
          <table className="table table-striped  text-white ">
            <tr className="text-primary h2 ">
              <th>Firstname</th>
              <th>Email</th>
              <th>Requested For</th>
            </tr>

            {accessReq.map((adminData, i) => {
              return (
                <tr className="-white border-bottom " key={adminData.username + i}>
                  <td>{adminData.username}</td>
                  <td>{adminData.password}</td>
                  <td>{adminData.admin ? "Admin Access" : "User Access"}</td>
                  <td>
                    <button
                      className="btn bg-success text-white h5"
                      onClick={(e) => {
                        handleRequest(e, i, adminData.username);
                        alert(`${adminData.username} request is Granted`);
                      }}
                    >
                      Accept
                    </button>
                    <button
                      className="btn bg-danger mx-2 text-white h5"
                      onClick={(e) => {
                        handleRequest(e, i, adminData.username);
                        alert(`${adminData.username} request is denied`);
                      }}
                    >
                      Recject
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        )}
        {!accessReq.length && (
          <h4 className="text-white text-center m-2 p-2">
            no requests pending...
          </h4>
        )}
      </section>
    </>
  );
};

export default AdminReq;
