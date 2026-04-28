import Sidebar from "./Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Dashboard.css";
import Swal from "sweetalert2";

function Interns() {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  const getFileUrl = (file) => `http://localhost:3030/uploads/${file}`;

  const openPdf = (type) => {
    const fileMap = {
      resume: selectedApp.resume,
      citizenship: selectedApp.citizenship,
      application: selectedApp.collegeApplication,
    };

    const url = getFileUrl(fileMap[type]);

    Swal.fire({
      title: "Document Viewer",
      width: "900px",
      html: `
        <iframe 
          src="${url}" 
          style="width:100%;height:600px;border:none;"
        ></iframe>
      `,
      showCloseButton: true,
      showConfirmButton: false,

      // when PDF closes → reopen detail popup
      willClose: () => {
        if (selectedApp) {
          showDetails(selectedApp);
        }
      },
    });
  };

  // expose for SweetAlert HTML buttons
  window.openPdf = openPdf;

  const showDetails = (app) => {
    setSelectedApp(app);

    Swal.fire({
      title: "Intern Details",
      width: "800px",
      customClass: {
        title: "swal-title-bg",
      },
      html: `
        <div style="text-align:left">

          <p><b>Name:</b> ${app.firstName} ${app.lastName}</p>
          <p><b>Email:</b> ${app.email}</p>
          <p><b>Phone:</b> ${app.phone || "N/A"}</p>
          <p><b>Course:</b> ${app.course}</p>
          <p><b>Education:</b> ${app.education || "N/A"}</p>

          <p><b>Start Date:</b> ${new Date(app.startDate).toLocaleDateString()}</p>
          <p><b>End Date:</b> ${new Date(app.endDate).toLocaleDateString()}</p>

          <hr/>

          <p>
          <b>Resume:</b>
            <button onclick="window.openPdf('resume')">
              View
            </button>
          </p>

          <p>
          <b>Citizenship:</b>
            <button onclick="window.openPdf('citizenship')">
              View
            </button>
          </p>

          <p>
          <b>Application:</b>
            <button onclick="window.openPdf('application')">
              View 
            </button>
          </p>

        </div>
      `,
      showCloseButton: true,
      confirmButtonColor: "#476d9b",
    });
  };

  return (
    <div className="layout" style={{ display: "flex" }}>
      <Sidebar />

      <div className="dash">
        <div className="table-header" style={{ marginLeft: "20px" }}>
          <h2>All Interns</h2>
        </div>

        <table className="table" style={{ width: "90%", marginLeft: "20px" }}>
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
                  <button
                    onClick={() => showDetails(app)}
                    style={{ backgroundColor: "#476d9b", color: "white", padding:"4px" }}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Interns;
