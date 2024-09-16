"use client";

import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <main style={mainContainerStyle}>
      {children}
    </main>
  );
};

const mainContainerStyle: React.CSSProperties = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

export default MainContainer;
