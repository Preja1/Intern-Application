import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import {useEffect} from 'react';

function Dashboard(){
    const location=useLocation();
    useEffect(() => {
    if (location.state?.message) {
      console.log(location.state.message);
    }
  }, [location.state?.message]);
    return (
        <>
        <div className="layout" style={{display:"flex"}}>
        <Sidebar></Sidebar>
        <div className="dash">
            <h1>Dashboard</h1>
        </div>
        </div>
        </>
    );
}

export default Dashboard;