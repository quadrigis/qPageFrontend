import React from 'react';
import UsersTable from './UsersTable';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Lista użytkowników</h1>
      <UsersTable />
    </div>
  );
}

export default App;