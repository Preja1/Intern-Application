import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Application.css";

function Application() {
  const { id } = useParams();
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

  useEffect(() => {
    console.log("EDIT ID:", id);
    if (id) {
      axios
        .get(`http://localhost:3030/api/application/${id}`)

        .then((res) => {
          console.log("API RESPONSE:", res.data);
          const app = res.data.data;

          setForm({
            firstName: app.firstName || "",
            lastName: app.lastName || "",
            email: app.email || "",
            phone: app.phone || "",
            dob: app.dob || "",
            course: app.course || "",
            education: app.education || "",
            startDate: app.startDate || "",
            endDate: app.endDate || "",
            resume: null,
            citizenship: null,
            collegeApplication: null,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    for (let key in form) {
      if (form[key] !== null && form[key] !== "") {
        formData.append(key, form[key]);
      }
    }

    try {
      let res;

      if (id) {
        res = await axios.put(
          `http://localhost:3030/api/application/${id}`,
          formData,
        );
      } else {
        res = await axios.post(
          "http://localhost:3030/api/application",
          formData,
        );
      }

      if (res.data.success) {
        toast.success(id ? "Updated Successfully!" : "Submitted Successfully!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
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
                value={form.firstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="dob"
                placeholder="Date of Birth"
                value={form.dob}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <br></br>

            <div className="academic-section">
              <h3>Academic Details</h3>

              <input
                type="text"
                name="education"
                placeholder="Education"
                value={form.education}
                onChange={handleChange}
              />

              <input
                type="text"
                name="course"
                placeholder="Course"
                value={form.course}
                onChange={handleChange}
              />
            </div>
            <br></br>

            <div className="date-section">
              <h3>Intern Details</h3>
              <input
                type="number"
                name="duration"
                placeholder="Duration (months)"
                value={form.duration}
                min="1"
                onChange={handleChange}
              />
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
              />
              <label>End Date:</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
              />
            </div>
            <br></br>

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
            <br></br>

            <button type="submit">
              {id ? "Update Application" : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Application;
