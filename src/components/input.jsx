import React, { useState, useRef } from 'react';

const InputGroup = () => {
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    setValid(inputRef.current?.value.length > 0);
  };

  const handleChange = () => {
    setValid(inputRef.current?.value.length > 0);
  };

  return (
    <div style={inputGroupStyle}>
      <input
        type="text"
        ref={inputRef}
        style={inputStyle(focused, valid)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        required
        name="text"
        autoComplete="off"
      />
      <label style={userLabelStyle(focused, valid)}>First Name</label>
    </div>
  );
};

// Styles
const inputGroupStyle = {
  position: 'relative',
};

const inputStyle = (focused, valid) => ({
  border: 'solid 1.5px #9e9e9e',
  borderRadius: '1rem',
  background: 'none',
  padding: '1rem',
  fontSize: '1rem',
  color: '#f5f5f5',
  transition: 'border 150ms cubic-bezier(0.4,0,0.2,1)',
  borderColor: focused || valid ? '#1a73e8' : '#9e9e9e',
  outline: 'none',
  
});

const userLabelStyle = (focused, valid) => ({
  position: 'absolute',
  left: '15px',
  color: '#e8e8e8',
  pointerEvents: 'none',
  transform: focused || valid ? 'translateY(-50%) scale(0.8)' : 'translateY(1rem)',
  transition: '150ms cubic-bezier(0.4,0,0.2,1)',
  backgroundColor: focused || valid ? '#212121' : 'transparent',
  padding: focused || valid ? '0 .2em' : '0',
  color: focused || valid ? '#2196f3' : '#e8e8e8',
  
});

export default InputGroup;
