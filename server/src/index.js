import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

const queues = {};

app.get('/', (req, res) => {
  res.send('Message Queue API is running');
});

app.get('/queues', (req, res) => {
  const queuesData = {};
  for (const [queueName, messages] of Object.entries(queues)) {
    queuesData[queueName] = messages.length;
  }
  res.json(queuesData);
});


app.post('/api/:queue_name', (req, res) => {
  const { queue_name } = req.params;
  const message = req.body;

  if (!message || typeof message !== 'object') {
    return res.status(400).json({ error: 'Invalid message format. Expected JSON.' });
  }

  if (!queues[queue_name]) {
    queues[queue_name] = [];
  }

  queues[queue_name].push(message);

  res.status(201).json({ success: true, message: 'Message added to the queue.' });
});

app.get('/api/:queue_name', async (req, res) => {
  const { queue_name } = req.params;
  const timeout = parseInt(req.query.timeout, 10) || 10000;

  if (!queues[queue_name] || queues[queue_name].length === 0) {
    await new Promise((resolve) => setTimeout(resolve, timeout));

    if (!queues[queue_name] || queues[queue_name].length === 0) {
      return res.status(204).send();
    }
  }

  const message = queues[queue_name].shift();

  res.status(200).json(message);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});