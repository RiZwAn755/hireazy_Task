import React, { useState, useRef, useEffect } from 'react';

const ChatRoom = ({ messages, onSend, role, disabled }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role.toLowerCase()}`}> 
            <strong>{msg.role}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={disabled ? 'Interview ended' : 'Type a message...'}
          disabled={disabled}
        />
        <button type="submit" disabled={disabled || !input.trim()}>Send</button>
      </form>
    </div>
  );
};

export default ChatRoom; 