import React from 'react';
import { Typography } from '@mui/material';

const MessageDisplay = ({ message }) => {
  return (
    <Typography variant="body1" sx={{ marginTop: '1rem' }}>
      Message: {message ? (typeof message === 'string' ? message : JSON.stringify(message)) : 'No message selected'}
    </Typography>
  );
};

export default MessageDisplay;
