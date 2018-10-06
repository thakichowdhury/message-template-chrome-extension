import React from 'react';

const expandedTextArea = {
  width: '500px',
  height: '500px',
};

const Letter = ({ letter, copy }) => (
  <div>
    {
      letter !== '' &&
      <textarea 
        defaultValue={letter}
        style={expandedTextArea}
        className="letter"
        onClick={copy}
      />
    }
  </div>
)

export default Letter;
