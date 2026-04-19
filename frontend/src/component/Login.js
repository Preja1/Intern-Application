import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginLogo from "../media/loginlogo.png";
import "./Login.css";

function Login() {
  const navigate=useNavigate();
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    e.stopPropagation();
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin(e) {
    e.preventDefault();

    if (auth.username === "" || auth.password === "") {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3030/api/login", auth);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard",{state:{message:"Login successful."}});
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="header-card">
          <img src={loginLogo} alt="Digital" className="logo" />
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={auth.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={auth.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
