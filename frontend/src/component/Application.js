import Sidebar from "./Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Application.css";

function Application() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    course: "",
    education: "",
    startDate: "",
    endDate: "",
    resume: null,
    citizenship: null,
    collegeApplication: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    for (let key in form) {
      formData.append(key, form[key]);
    }

    try {
      const res =await axios.post("http://localhost:3030/api/application", formData);
      if (res.data.success) {
        alert("Application Submitted Successfully!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="layout" style={{ display: "flex" }}>
        <Sidebar></Sidebar>
        <div className="form-container">
          <h2>Intern Application Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="presonal-section">
              <h3>Personal Information</h3>

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="dob"
                placeholder="Date of Birth"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                required
              />
            </div>

            <div className="academic-section">
              <h3>Academic Details</h3>

              <input
                type="text"
                name="education"
                placeholder="Education"
                onChange={handleChange}
              />

              <input
                type="text"
                name="course"
                placeholder="Course"
                onChange={handleChange}
              />
            </div>

            <div className="date-section">
              <h3>Intern Details</h3>
              <label>Start Date:</label>
              <input type="date" name="startDate" onChange={handleChange} />
              <label>End Date:</label>
              <input type="date" name="endDate" onChange={handleChange} />
            </div>

            <div className="document-sections">
              <div className="section">
                <h3>Upload Resume</h3>
                <input type="file" name="resume" onChange={handleChange} />
              </div>
              <div className="section">
                <h3>Upload Citizenship</h3>
                <input type="file" name="citizenship" onChange={handleChange} />
              </div>
              <div className="section">
                <h3>Upload College Application</h3>
                <input
                  type="file"
                  name="collegeApplication"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Application;
