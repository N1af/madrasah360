// src/components/StudentRegistration.jsx
import React from 'react';
import './StudentRegistration.css';

const StudentRegistration = () => {
  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" required />
        </div>
        <div className="form-group">
          <label>Class</label>
          <input type="text" placeholder="Enter class" required />
        </div>
        <div className="form-group">
          <label>Guardian Name</label>
          <input type="text" placeholder="Enter guardian name" required />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input type="tel" placeholder="07XXXXXXXX" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
