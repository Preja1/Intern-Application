import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

function HRRequest() {
  const [applications, setApplications] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3030/api/applications");

    const pending = res.data.data.filter(
      (app) => app.durationStatus === "Pending",
    );

    setApplications(pending);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const approve = async (id) => {
    await axios.put(`http://localhost:3030/api/hr/approve/${id}`);
    fetchData();
  };

  const reject = async (id) => {
    await axios.put(`http://localhost:3030/api/hr/reject/${id}`);
    fetchData();
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px" }}>
        <h2>HR Duration Requests</h2>

        {applications.map((app) => (
          <div key={app.id}>
            <p>
              {app.firstName} {app.lastName}
            </p>
            <p>Current: {app.duration} months</p>
            <p>Requested: {app.durationRequest} months</p>

            <button
              style={{
                background: "green",
                color: "white",
              }}
              onClick={() => approve(app.id)}
            >
              Approve
            </button>
            <button
              style={{
                background: "red",
                color: "white",
              }}
              onClick={() => reject(app.id)}
            >
              Reject
            </button>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HRRequest;
