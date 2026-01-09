import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mfaMethod, setMfaMethod] = useState('sms');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Validate inputs
    if (!email || !phone) {
      alert('Email and phone are required.');
      return;
    }
    // Call backend API to register user
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone, mfaMethod })
      });
      if (!response.ok) throw new Error('Registration failed');
      alert('Registration successful! Check your email/phone for MFA setup.');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Phone:</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <label>MFA Method:</label>
      <select value={mfaMethod} onChange={(e) => setMfaMethod(e.target.value)}>
        <option value="sms">SMS OTP</option>
        <option value="email">Email OTP</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
