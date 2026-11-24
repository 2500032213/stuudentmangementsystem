import React from "react";

// Header Component
function Header() {
  return (
    <h1>Student Management System</h1>
  );
}

// Student List Component
function StudentList() {

  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Priya", marks: 35 },
    { id: 3, name: "Rahul", marks: 65 },
    { id: 4, name: "Sita", marks: 25 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>

              <td>
                {student.marks >= 40 ? "Pass" : "Fail"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <h3>End of Student Records</h3>
  );
}

// Main Component
function App() {
  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;