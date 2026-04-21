import Sidebar from "./Sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const dashboardRes = await axios.get(
          "http://localhost:3030/api/dashboard",
          {
            headers: {
              Authorization: token,
            },
          },
        );

        console.log("Dashboard:", dashboardRes.data);
        const appRes = await axios.get(
          "http://localhost:3030/api/applications",
        );

        setApplications(appRes.data.data);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.state?.message) {
      console.log(location.state.message);
    }
  }, [location.state]);
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this intern?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.delete(
          `http://localhost:3030/api/application/${id}`,
        );

        if (res.data.success) {
          toast.success("Deleted Successfully!");

          setApplications((prev) => prev.filter((app) => app.id !== id));
        }
      } catch (err) {
        console.log(err.response?.data || err.message);
        toast.error("Delete failed");
      }
    }
  };
  return (
    <>
      <div className="layout" style={{ display: "flex" }}>
        <Sidebar></Sidebar>
        <div className="dash">
          <h1 style={{ marginLeft: "10px" }}>Dashboard</h1>
          <div className="cards">
            <div className="card">
              <h3>Total Interns</h3>
              <p>{applications.length}</p>
            </div>

            <div className="card">
              <h3>Pending Applications</h3>
              <p>35</p>
            </div>

            <div className="card">
              <h3>Approved</h3>
              <p>80</p>
            </div>

            <div className="card">
              <h3>Rejected</h3>
              <p>5</p>
            </div>
          </div>
          <div className="table-section">
            <div className="table-header">
              <h2>Recent Applications</h2>
              <Link to="/application">
                <button className="add-btn">Add Application +</button>
              </Link>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Application Name</th>
                  <th>Email</th>
                  <th>Internship</th>
                  <th>Applied Date</th>
                  <th>Ended Date</th>
                  <th>Action</th>
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
                      <button onClick={() => navigate(`/edit/${app.id}`)}>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(app.id)}
                        style={{ color: "red" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
