import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Dashboard.css";

function Interns() {
  const [applications, setApplications] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try{
      const appRes = await axios.get(
          "http://localhost:3030/api/applications",
        );

        setApplications(appRes.data.data);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    }
    fetchData();
  },[]);
  return (
    <>
      <div className="layout" style={{ display: "flex" }}>
        <Sidebar></Sidebar>
        <div className="table-section">
          <div className="table-header">
            <h2>All Interns</h2>
          </div>

          <table className="table" style={{ width: "150%" }}>
            <thead>
              <tr>
                <th>Application Name</th>
                <th>Email</th>
                <th>Internship</th>
                <th>Applied Date</th>
                <th>Ended Date</th>
                <th>More</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>
                    {app.firstName} {app.lastName}
                  </td>
                  <td>{app.email}</td>
                  <td>{app.course}</td>
                  <td>{app.startDate}</td>
                  <td>{app.endDate}</td>
                  <td>
                    <Link to="/detail">
                      <button
                        style={{ backgroundColor: "#007A53", color: "white" }}
                      >
                        Detail
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Interns;
