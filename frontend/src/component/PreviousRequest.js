import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./PreviousRequest.css";

function PrevousRequest() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3030/api/applications");

        setApplications(res.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const app = applications[0]; // 👉 show latest one (or you can change logic)

  if (!app) return <p>Loading...</p>;
  return (
    <>
      <div className="layout" style={{ display: "flex" }}>
        <Sidebar></Sidebar>
        <div className="receipt-container">
          <h2>Application Request Details</h2>

          <div className="receipt-box">
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
              <span className="value">{app.status}</span>
            </div>

            <div className="row">
              <span className="label">Start Date</span>
              <span className="value">{app.startDate}</span>
            </div>

            <div className="row">
              <span className="label">End Date</span>
              <span className="value">{app.endDate}</span>
            </div>

            {/* DOCUMENTS */}
            <h3 className="section-title">Documents</h3>

            <div className="row">
              <span className="label">Resume</span>
              <a
                className="value link"
                href={`http://localhost:3030/uploads/${app.resume}`}
               
              >
                View
              </a>
            </div>

            <div className="row">
              <span className="label">Citizenship</span>
              <a
                className="value link"
                href={`http://localhost:3030/uploads/${app.citizenship}`}
               
              >
                View
              </a>
            </div>

            {/* SIGNATURE SECTION */}
            <h3 className="section-title">Signature</h3>

            <div className="signature-box">
              <div>
                Applicant Signature
                <div className="line"></div>
              </div>

              <div>
                Admin Signature
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrevousRequest;
