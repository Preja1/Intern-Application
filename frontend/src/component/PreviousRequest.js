import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./PreviousRequest.css";

function PreviousRequest() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3030/api/applications");
      setApplications(res.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const res = await axios.put(
        `http://localhost:3030/api/application/${id}/status`,
        { status },
      );

      if (res.data.success) {
        toast.success(`Application ${status}`);
        navigate("/dashboard");
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="layout" style={{ display: "flex" }}>
      <Sidebar />

      <div className="receipt-container">
        <h2>Application Request Details</h2>

        {applications.length === 0 ? (
          <p>Loading...</p>
        ) : (
          applications
            .filter((app) => app.status === "Pending")
            .map((app) => (
              <div key={app.id} className="receipt-box">
                <div className="row">
                  <span className="label">Name</span>
                  <span className="value">
                    {app.firstName} {app.lastName}
                  </span>
                </div>

                <div className="row">
                  <span className="label">Email</span>
                  <span className="value">{app.email}</span>
                </div>

                <div className="row">
                  <span className="label">Phone</span>
                  <span className="value">{app.phone}</span>
                </div>

                <div className="row">
                  <span className="label">Course</span>
                  <span className="value">{app.course}</span>
                </div>

                <div className="row">
                  <span className="label">Status</span>
                  <span
                    className="value"
                    style={{
                      color:
                        app.status === "Approved"
                          ? "green"
                          : app.status === "Rejected"
                            ? "red"
                            : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {app.status}
                  </span>
                </div>

                <div className="row">
                  <span className="label">Start Date</span>
                  <span className="value">{app.startDate}</span>
                </div>

                <div className="row">
                  <span className="label">End Date</span>
                  <span className="value">{app.endDate}</span>
                </div>

                <div style={{ marginTop: "15px" }}>
                  <button
                    style={{
                      background: "green",
                      color: "white",
                      marginRight: "10px",
                    }}
                    onClick={() => handleStatusChange(app.id, "Approved")}
                  >
                    Approve
                  </button>

                  <button
                    style={{
                      background: "red",
                      color: "white",
                    }}
                    onClick={() => handleStatusChange(app.id, "Rejected")}
                  >
                    Reject
                  </button>
                </div>

                <hr style={{ margin: "20px 0" }} />
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default PreviousRequest;
