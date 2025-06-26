// src/pages/dashboard/DashboardHome.jsx
import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

const students = [
  { id: 1, name: 'Ali Ahmad', className: 'Grade 5', registeredDate: '2025-05-15' },
  { id: 2, name: 'Fatima Noor', className: 'Grade 4', registeredDate: '2025-05-18' },
  { id: 3, name: 'Mohamed Faiz', className: 'Grade 6', registeredDate: '2025-06-01' },
];

export default function DashboardHome() {
  return (
    <div style={{ padding: '20px', fontFamily: "'Inter', sans-serif" }}>
      <h1 style={{ marginBottom: '20px' }}>Welcome to Madrasah360 Dashboard</h1>
      
        

      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h3>Total Students</h3>
          <p style={numberStyle}>120</p>
        </div>

        <div style={cardStyle}>
          <h3>Today’s Attendance</h3>
          <p style={numberStyle}>108</p>
        </div>
      </div>
      <Link to="/dashboard/add-student">
        <button className="btn">Add Student</button>
    </Link>

      <section>
        <h2>Recent Registered Students</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Registered Date</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.className}</td>
                <td>{student.registeredDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

const cardStyle = {
  flex: '1',
  minWidth: '200px',
  background: '#2563eb',
  color: 'white',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  textAlign: 'center',
};

const numberStyle = {
  fontSize: '2.8rem',
  fontWeight: '700',
  marginTop: '10px',
  fontFamily: "'Inter', sans-serif",
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

