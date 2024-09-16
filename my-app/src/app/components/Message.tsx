"use client";

import React from 'react';

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div style={messageStyle}>
      {message}
    </div>
  );
};

const messageStyle: React.CSSProperties = {
  marginBottom: '20px',
  color: '#007bff',
};

export default Message;
