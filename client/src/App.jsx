import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import QueueList from './components/QueueList';
import QueueViewer from './components/QueueViewer';
import MessageDisplay from './components/MessageDisplay';
import { fetchQueues, fetchMessage } from './api/messageQueueApi';

function App() {
  const [queues, setQueues] = useState([]);
  const [message, setMessage] = useState(null);

  // Fetch queues on component mount
  useEffect(() => {
    const loadQueues = async () => {
      const data = await fetchQueues();
      setQueues(Object.entries(data));
    };
    loadQueues();
  }, []);

  const handleFetchMessage = async (queueName, timeout) => {
    try {
      const msg = await fetchMessage(queueName, timeout);
      setMessage(msg);
    } catch (error) {
      setMessage('Error fetching message');
    }
  };
  

  return (
    <Container sx={{ padding: '2rem', backgroundColor: 'background.default', color: 'text.primary', borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Voyantis Message Queue
      </Typography>
      <QueueList queues={queues} />
      <QueueViewer onFetchMessage={handleFetchMessage} />
      <MessageDisplay message={message} />
    </Container>
  );
}

export default App;
