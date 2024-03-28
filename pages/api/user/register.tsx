import React, { useState } from 'react';
import { trpc } from '../../../src/utils/trpc'; // Adjust the import path as necessary
import { TRPCClientError } from '@trpc/client';
import { AppRouter } from '~/trpc/createRouter';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { mutate, isLoading } = trpc.useMutation(['user.register'], {
    onSuccess: () => {
      // Handle success (e.g., navigate to the login page or show a success message)
    },
    onError: (err: TRPCClientError<AppRouter>) => {
        // Now `err` is typed, and you can access its properties safely
        setError(err.message); // Example: setting error state to the error message
    },
  });

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Optionally reset error messages
    mutate({ email, password });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>Register</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;
