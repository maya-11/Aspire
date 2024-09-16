// src/components/SignupForm.tsx

import React, { useState } from 'react';

interface SignupFormProps {
  onSignUp: (email: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignUp }) => {
  const [email, setEmail] = useState('');

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      onSignUp(email);
      setEmail(''); // Clear input after submission
    }
  };

  return (
    <form onSubmit={handleSignUp} style={styles.form}>
      <h2>Join the Waitlist</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Sign Up</button>
    </form>
  );
};

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    width: '100%',
  },
};

export default SignupForm;
