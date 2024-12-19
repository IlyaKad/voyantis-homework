# Voyantis Message Queue

This application allows users to manage message queues with a REST API and a user-friendly interface.

## Features

- Add messages to queues.
- Fetch messages with optional timeout handling.
- Display available queues and message counts.

## Installation

1. Clone the repository:
```bash
   git clone <repository-url>
   cd <repository-directory>

   cd server
   npm install
   npm run dev
   Backend is accessible at http://localhost:3001.

   cd client
   npm install
   npm run dev
   Navigate to http://localhost:5173 to use the app.
```
## For incerting to queys use this curl:
```
curl --location 'http://localhost:3001/api/my_queue' \
--header 'Content-Type: application/json' \
--data '{"id": 1, "text": "Hello, this is a test message!"}'
```