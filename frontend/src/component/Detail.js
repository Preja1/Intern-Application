import { useState } from "react";

function Detail() {
  const [show, setShow] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);

  const interns = [
    {
      name: "Ram Shah",
      email: "ram@gmail.com",
      internship: "Frontend",
      applied: "2026-04-16",
      ended: "2026-07-16",
    },
  ];
    function handleDetail(intern) {
    setSelectedIntern(intern);
    setShow(true);
  }
    return (
    <div>
      <h2>All Interns</h2>

      <table className="table">
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
          {interns.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.internship}</td>
              <td>{item.applied}</td>
              <td>{item.ended}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleDetail(item)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            {show && selectedIntern && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Intern Details</h5>
                <button
                  className="btn-close"
                  onClick={() => setShow(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p><strong>Name:</strong> {selectedIntern.name}</p>
                <p><strong>Email:</strong> {selectedIntern.email}</p>
                <p><strong>Internship:</strong> {selectedIntern.internship}</p>
                <p><strong>Applied Date:</strong> {selectedIntern.applied}</p>
                <p><strong>End Date:</strong> {selectedIntern.ended}</p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShow(false)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;