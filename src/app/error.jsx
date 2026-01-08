// src/app/error.jsx
'use client';

export default function GlobalError({ error, reset }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Something went wrong (500)</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
