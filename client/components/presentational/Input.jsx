import React from 'react';

const Input = ({ name, placeholder, value, handleChange }) => (
  <div>
    <input name={name} placeholder={placeholder} value={value} onChange={handleChange} />
  </div>
)

export default Input;
