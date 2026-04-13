import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Interns from './component/Interns';


function App() {
 useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3030/api/dashboard");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
}, []);
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/intern" element={<Interns></Interns>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
