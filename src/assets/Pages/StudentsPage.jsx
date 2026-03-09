import React, { useEffect, useState } from "react";

function StudentPage() {

  const [students, setStudents] = useState([]);

  const studentData = [
    { id: 1, name: "Rhuzl", course: "BSIT" },
    { id: 2, name: "Cyrus", course: "BSCS" },
    { id: 3, name: "Jay", course: "BSIS" },
    { id: 4, name: "Deon", course: "BSIT" },
    { id: 5, name: "Frex", course: "BSBA" },
    { id: 6, name: "Karl", course: "BSME" },
    { id: 7, name: "Miguel", course: "BSIT" },
    { id: 8, name: "Zed", course: "BSCS" },
    { id: 9, name: "Aldrich", course: "BSA" },
    { id: 10, name: "Daisy", course: "BSCE" }
  ];

  useEffect(() => {
    setStudents(studentData);
  }, []);

  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            ID: {student.id} | Name: {student.name} | Course: {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentPage;