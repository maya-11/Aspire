"use client";

import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1>AspireHub</h1>
      <p>Connecting tech students with professionals</p>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '20px',
};

export default Header;
