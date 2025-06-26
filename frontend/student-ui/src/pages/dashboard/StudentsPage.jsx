import React, { useState, useEffect } from 'react';
import './dashboard.css';

const dummyStudents = [
  { id: 1, fullName: 'Ali Ahmad', className: 'Grade 5', guardianName: 'Mr. Ahmad', contact: '0712345678' },
  { id: 2, fullName: 'Fatima Noor', className: 'Grade 4', guardianName: 'Mrs. Noor', contact: '0723456789' },
  { id: 3, fullName: 'Mohamed Faiz', className: 'Grade 6', guardianName: 'Mr. Faiz', contact: '0709876543' },
  // add more dummy data as needed
];

export default function StudentsPage() {
  const [students, setStudents] = useState(dummyStudents);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') {
      setStudents(dummyStudents);
    } else {
      const filtered = dummyStudents.filter((s) =>
        s.fullName.toLowerCase().includes(search.toLowerCase()) ||
        s.className.toLowerCase().includes(search.toLowerCase())
      );
      setStudents(filtered);
    }
  }, [search]);

  return (
    <div>
      <h2>Students List</h2>
      <input
        type="text"
        placeholder="Search by name or class"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Class</th>
            <th>Guardian</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.fullName}</td>
                <td>{student.className}</td>
                <td>{student.guardianName}</td>
                <td>{student.contact}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const inputStyle = {
  padding: '8px',
  marginBottom: '15px',
  width: '100%',
  maxWidth: '400px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};
