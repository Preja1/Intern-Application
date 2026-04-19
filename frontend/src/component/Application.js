import Sidebar from "./Sidebar";
import { useState } from "react";
import "./Application.css";

function Application() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    university: "",
    course: "",
    education: "",
    citizenship: "",
    startDate: "",
    endDate: "",
    resume: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", form);

    alert("Application Submitted Successfully!");
  }
  return (
    <>
      <div className="layout" style={{ display: "flex" }}>
        <Sidebar></Sidebar>
        <div  className="form-container">
      <h2>Intern Application Form</h2>

      <form onSubmit={handleSubmit}>
    
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
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        /><br /><br />

        <label>DOB:</label><br />
        <input
          type="date"
          name="dob"
          onChange={handleChange}
          required
        /><br /><br />

        {/* Academic Details */}
        <h3>Academic Details</h3>

        <input
          type="text"
          name="university"
          placeholder="University"
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="course"
          placeholder="Course"
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="education"
          placeholder="Education"
          onChange={handleChange}
        /><br /><br />

        

        {/* Intern Details */}
        <h3>Intern Details</h3>

        <label>Start Date:</label><br />
        <input
          type="date"
          name="startDate"
          onChange={handleChange}
        /><br /><br />

        <label>End Date:</label><br />
        <input
          type="date"
          name="endDate"
          onChange={handleChange}
        /><br /><br />

      
        <h3>Upload Resume</h3>

        <input
          type="file"
          name="resume"
          onChange={handleChange}
        /><br /><br />
        <h3>Upload Citizenship</h3>

        <input
          type="file"
          name="resume"
          onChange={handleChange}
        /><br /><br />

        <h3>Upload College Application</h3>

        <input
          type="file"
          name="resume"
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit Application</button>
      </form>
    </div>
      </div>

    </>
  );
}
export default Application;


