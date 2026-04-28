import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./History.css";

function History() {
  const [applications, setApplications] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3030/api/applications");

      const approvedData = res.data.data.filter(
        (app) => app.status === "Approved",
      );

      setApplications(approvedData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // request duration change
  const requestChange = async (id) => {
    const { value: newDuration } = await Swal.fire({
    title: "Request Duration Change",
    input: "select",
    inputOptions: {
      2: "2 Months",
      3: "3 Months",
    },
    inputPlaceholder: "Select duration",
    showCancelButton: true,
    confirmButtonText: "Send Request",
    cancelButtonText: "Cancel",
    background: "#fff",
    color: "#000",
  });

    if (!newDuration) return;

    try {
      const res = await axios.put(
        `http://localhost:3030/api/application/${id}/request-duration`,
        { duration: newDuration },
      );

      if (res.data.success) {
        alert("Request sent to HR");
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Layout" style={{ display: "flex" }}>
      <Sidebar />

      <div className="His-header">
        <h2>Approved Internship History</h2>
<div className="His-body">
        {applications.length === 0 ? (
          <p>No approved records found</p>
        ) : (
          applications.map((app) => (
            <div className="His-info"
              key={app.id}
             
            >
              <p>
                <b>Name:</b> {app.firstName} {app.lastName}
              </p>
              <p>
                <b>Email:</b> {app.email}
              </p>
              <p>
                <b>Phone:</b> {app.phone}
              </p>
              <p>
                <b>Duration:</b> {app.duration} months
              </p>

              <p>
                <b>Status:</b> {app.status}
              </p>

              <p>
                <b>Duration Request:</b>{" "}
                <span
                  style={{
                    color:
                      app.durationStatus === "Approved"
                        ? "green"
                        : app.durationStatus === "Rejected"
                          ? "red"
                          : app.durationStatus === "Pending"
                            ? "orange"
                            : "gray",
                    fontWeight: "bold",
                  }}
                >
                  {app.durationStatus || "None"}
                </span>
              </p>

              {app.durationRequest && (
                <p>
                  <b>Requested Duration:</b> {app.durationRequest} months
                </p>
              )}

              {app.durationStatus !== "Pending" && (
                <div className="req-duration-btn">
                  <button onClick={() => requestChange(app.id)}>
                    Request Duration Change
                  </button>
                </div>
              )}
              
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
}

export default History;
