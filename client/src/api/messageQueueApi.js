import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const fetchQueues = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/queues`);
    console.log(`response.data - ${response.data}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching queues:', error);
    return {};
  }
};

export const fetchMessage = async (queueName, timeout = 5000) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/${queueName}?timeout=${timeout}`);
    return response.data || 'No message in queue';
  } catch (error) {
    console.error('Error fetching message:', error);
    throw error;
  }
};

