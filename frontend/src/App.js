import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Interns from "./component/Interns";
import Application from "./component/Application";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrevousRequest from "./component/PreviousRequest";
import History from "./component/History";
import HRRequest from "./component/HRRequest";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
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
            path="/previousreq"
            element={
              <PrivateRoute>
                <PrevousRequest />
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

          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History/>
              </PrivateRoute>
            }
          />
          <Route
            path="/hrrequest"
            element={
              <PrivateRoute>
                < HRRequest></HRRequest>
              </PrivateRoute>
            }
          />
          <Route path="/edit/:id" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
