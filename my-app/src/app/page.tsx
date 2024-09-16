"use client";

import React, { useState } from 'react';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import Message from './components/Message';
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import { api  } from "../../convex/_generated/api"

export default function Home() {
  const Aspire = useQuery(api.functions.Aspire);
}

const Page: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSignUp = (email: string) => {
    setMessage(`Thank you for signing up, ${email}!`);
  };

  return (
    <div style={containerStyle}>
      <Header />
      <MainContainer>
        <SignupForm onSignUp={handleSignUp} />
        <Message message={message} />
        <Login />
      </MainContainer>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
};

export default Page;
