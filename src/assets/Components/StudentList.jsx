import React from "react";
import { Link } from "react-router-dom";

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>

        <body>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>
                <Link to={`/student/${student.id}`}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </body>
      </table>

    </div>
  );
}

export default StudentList;