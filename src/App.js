// src/App.js (example usage)
import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_HELLO = gql`
  query GetHello {
    hello
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p style={{fontSize:"20px"}}>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.hello}</h1>
      </header>
    </div>
  );
}

export default App;
