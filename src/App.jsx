import React, { useState } from 'react';
import './App.css';
import RoleSelector from './components/RoleSelector';
import ChatRoom from './components/ChatRoom';
import FileUpload from './components/FileUpload';
import InterviewControls from './components/InterviewControls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [role, setRole] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);

  const handleSelectRole = (selectedRole) => {
    setRole(selectedRole);
      toast.info('Start the interview');
    
  };

  const handleSend = (text) => {
    setMessages([...messages, { role, text }]);
  };

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const handleStart = () => {
    
    setIsStarted(true);
    setIsEnded(false);
    setMessages([]);
    setFile(null);
  };

  const handleEnd = () => {
    setIsEnded(true);
    setIsStarted(false);
  };

  return (
    <div className="app-container">
      <ToastContainer/>
      <h1>Interview Simulation Room</h1>
      {!role ? (
        <RoleSelector onSelectRole={handleSelectRole} />
      ) : (
        <>
          <div className="top-bar">
            <span className="role-label">Role: <b>{role}</b></span>
            <InterviewControls isStarted={isStarted} onStart={handleStart} onEnd={handleEnd} />
          </div>
          {role === 'Interviewer' && (
            <FileUpload onFileUpload={handleFileUpload} disabled={!isStarted || isEnded} file={file} />
          )}
          <ChatRoom
          
            messages={messages}
            onSend={handleSend}
            role={role}
            disabled={!isStarted || isEnded}
          />
          {isEnded && <div className="ended-msg">Interview ended.</div>}
          
        </>
      )}
    </div>
  );
}

export default App;
