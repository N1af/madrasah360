import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '220px', background: '#1f2937', color: 'white', padding: '20px' }}>
        <h2>🕌 Madrasah360</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link style={{ color: 'white' }} to="/dashboard">Dashboard</Link></li>
            <li><Link style={{ color: 'white' }} to="/dashboard/students">Students</Link></li>
            <li><Link style={{ color: 'white' }} to="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '30px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
