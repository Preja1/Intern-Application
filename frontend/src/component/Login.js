import { useState } from "react";
import loginLogo from "../media/loginlogo.png";
import "./Login.css";

function Login() {
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

  function handleLogin(e) {
    e.preventDefault();

    if (auth.username === "admin" && auth.password === "admin123") {
      window.location.href = "/dashboard";
    } else if (auth.username === "" || auth.password === "") {
      alert("Please fill all fields!");
    }  else {
      alert("Enter correct Username and Password.");
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
