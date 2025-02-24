// src/App.jsx
import React from 'react';
import TeamMemberCard from './pages/TeamMemberCard';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Our Team</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <TeamMemberCard name="John Doe" jobTitle="Software Engineer" />
        <TeamMemberCard name="Jane Smith" jobTitle="Product Manager" />
        <TeamMemberCard name="furkhan" jobTitle="Product tester" />
      </div>
    </div>
  );
}

export default App;
