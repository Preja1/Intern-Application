import Sidebar from "./Sidebar";
import "./Dashboard.css";

function Interns(){
    return(
        <>
        <div className="layout" style={{display:"flex"}}>
        <Sidebar></Sidebar>
        <div className="table-section">
            <div className="table-header">
              <h2>All Interns</h2>
            </div>

            <table className="table" style={{width:"158%"}}>
              <thead>
                <tr>
                  <th>Application Name</th>
                  <th>Email</th>
                  <th>Internship</th>
                  <th>Applied Date</th>
                  <th>Ended Date</th>
                  <th>More</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Ram Shah</td>
                  <td>ram@gmail.com</td>
                  <td>Frontend</td>
                  <td>2026-04-16</td>
                  <td>2026-07-16</td>
                  <td>
                    <button style={{backgroundColor:"#007A53", color:"white"}}>Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </>
    );
}

export default Interns;