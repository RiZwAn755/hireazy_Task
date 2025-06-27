import React from 'react';

const InterviewControls = ({ isStarted, onStart, onEnd }) => (
  <div className="interview-controls">
    {!isStarted ? (
      <button onClick={onStart}>Start Interview</button>
    ) : (
      <button onClick={onEnd}>End Interview</button>
    )}
  </div>
);

export default InterviewControls; 