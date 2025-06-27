import React, { useRef } from 'react';

const FileUpload = ({ onFileUpload, disabled, file }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    const uploaded = e.target.files[0];
    if (uploaded && (uploaded.type === 'application/pdf' || uploaded.type === 'text/plain')) {
      onFileUpload(uploaded);
    } else {
      alert('Only PDF or TXT files are allowed.');
    }
  };

  const handleButtonClick = () => {
    if (!disabled) {
      inputRef.current.click();
    }
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        accept=".pdf,.txt"
        onChange={handleChange}
        disabled={disabled}
        style={{ display: 'none' }}
        ref={inputRef}
      />
      <button type="button" onClick={handleButtonClick} disabled={disabled}>
        Upload PDF/TXT
      </button>
      {file && <span className="file-name">{file.name}</span>}
    </div>
  );
};

export default FileUpload; 