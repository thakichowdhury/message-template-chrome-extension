import React from 'react';

const Input = ({ name, value, data, handleChange }) => (
  <div>
    <input
      name={name}
      placeholder={`Enter ${name}`}
      value={value}
      onChange={handleChange}
      data-key={data}
    />
  </div>
);

export default Input;
