import React from 'react';

import Input from './Input';

const HomeScreen = ({ user, handleUsernameChange }) => (
  <div>
    <Input name='userName' placeholder='Email' value={user} handleChange={handleUsernameChange} />
  </div>
);

export default HomeScreen;