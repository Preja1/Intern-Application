import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Interns from "./component/Interns";
import Application from "./component/Application";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/intern"
            element={
              <PrivateRoute>
                <Interns />
              </PrivateRoute>
            }
          />
          <Route
            path="/application"
            element={
              <PrivateRoute>
                <Application />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
