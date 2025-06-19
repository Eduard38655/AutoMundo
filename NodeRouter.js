// server.js
import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import GetData from './BackedControled/GetData.js';
import SubmitMessage from './BackedControled/SubmitMessage.js';

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://10.0.0.86:5173',
    "http://172.30.208.1:5173/",
      "http:// 255.255.240.0/",
      "http://172.30.208.1/",
      "http://172.30.208.1/",
      'http://192.168.1.xxx:5173'
      
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// 2) Middlewares de body‑parsing y estáticos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'AutoMundo')));


 
 
// 3) Tus routers
app.use('/', GetData);
app.use('/', SubmitMessage);

 

 

const PORT = process.env.PORT_APP || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
});