import './Sidebar.css';
import { Link ,useNavigate} from "react-router-dom";
import loginLogo from "../media/loginlogo.png";
function Sidebar(){
    const navigate = useNavigate();
    function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }
    return (
        <>
        <div className="sidebox">
            <div className='image'>
         <img src={loginLogo} alt="Digital" className="dashLogo" /></div>
         
         <div className="dashItem">
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <Link to="/previousreq"><button>Previous Request</button></Link>
            <Link to="/intern"><button>Interns</button></Link>
            <Link to="/application"><button>Application</button></Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </div>
        

        </>
    );
}

export default Sidebar;