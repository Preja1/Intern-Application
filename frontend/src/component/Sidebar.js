import './Sidebar.css';
import { Link } from "react-router-dom";
import loginLogo from "../media/loginlogo.png";
function Sidebar(){
    return (
        <>
        <div className="sidebox">
         <img src={loginLogo} alt="Digital" className="dashLogo" />
         <div className="dashItem">
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <Link to="/intern"><button>Intern</button></Link>
        </div>
        </div>
        

        </>
    );
}

export default Sidebar;