import React from 'react';

const Input = ({placeholder, value, handleChange}) => (
  <div>
    <input placeholder={placeholder} value={value} onChange={handleChange}></input>
  </div>
)

export default Input;
