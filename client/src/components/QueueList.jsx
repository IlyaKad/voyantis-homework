import React from 'react';
import { List, ListItem, Typography } from '@mui/material';

const QueueList = ({ queues }) => {
  return (
    <List>
      {queues.map(([name, messages]) => (
        <ListItem key={name} sx={{ borderBottom: '1px solid #FFFFFF' }}>
          <Typography>
            Queue: <strong>{name}</strong> ({messages.length} messages)
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default QueueList;
