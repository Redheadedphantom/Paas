// Dashboard.tsx
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
