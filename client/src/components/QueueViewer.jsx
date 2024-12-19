import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const QueueViewer = ({ onFetchMessage }) => {
  const [queueName, setQueueName] = useState('');
  const [timeout, setTimeoutValue] = useState(5000);

  const handleFetch = () => {
    if (queueName) {
      onFetchMessage(queueName, timeout);
    }
  };

  return (
    <Box sx={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TextField
        label="Queue Name"
        variant="outlined"
        value={queueName}
        onChange={(e) => setQueueName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Timeout (ms)"
        variant="outlined"
        type="number"
        value={timeout}
        onChange={(e) => setTimeoutValue(Number(e.target.value))}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleFetch} disabled={!queueName}>
        Fetch Message
      </Button>
    </Box>
  );
};

export default QueueViewer;
