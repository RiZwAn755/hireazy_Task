import React from 'react';

const RoleSelector = ({ onSelectRole }) => {
  return (
    <div className="role-selector">
      <h2>Select your role</h2>
      <button onClick={() => onSelectRole('Interviewer')}>Interviewer</button>
      <button onClick={() => onSelectRole('Candidate')}>Candidate</button>
    </div>
  );
};

export default RoleSelector; 