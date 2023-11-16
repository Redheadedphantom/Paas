import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#333', color: '#fff', padding: '20px' }}>
      <h2>Sidebar</h2>
      {/* Add sidebar links or components */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <a href="#dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
            Dashboard
          </a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="#analytics" style={{ textDecoration: 'none', color: '#fff' }}>
            Analytics
          </a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="#settings" style={{ textDecoration: 'none', color: '#fff' }}>
            Settings
          </a>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
