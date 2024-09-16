"use client";

import React from 'react';

const Login: React.FC = () => {
  return (
    <div style={loginStyle}>
      <p>Already have an account?</p>
      <button style={buttonStyle}>Log In</button>
    </div>
  );
};

const loginStyle: React.CSSProperties = {
  marginTop: '20px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
};

export default Login;
