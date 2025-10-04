require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => console.log('✅ MongoDB connected'))
      .catch(err => console.error('❌ MongoDB connection error:', err));

      // Create HTTP + Socket.IO server
      const httpServer = createServer(app);
      const io = new Server(httpServer, { cors: { origin: '*' } });

      // Store socket reference globally
      app.set('io', io);

      // Default route
      app.get('/', (req, res) => res.send('🎟️ Namma Show backend running successfully!'));

      // Example test route
      app.get('/ping', (req, res) => res.json({ message: 'pong' }));

      // Server start
      const PORT = process.env.PORT || 3000;
      httpServer.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
