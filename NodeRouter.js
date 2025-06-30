// server.js
import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import GetData from './BackedControled/GetData.js';
import SubmitMessage from './BackedControled/SubmitMessage.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS dinámico según entorno
const whitelist = process.env.NODE_ENV === 'production'
  ? [
      'https://eduard38655.github.io',
      'https://automundo.onrender.com'
    ]
  : ['http://localhost:5173'];

app.use(cors({
  origin: (origin, cb) => {
    // permitir peticiones sin origen (Postman, curl)
    if (!origin) return cb(null, true);
    if (whitelist.includes(origin)) return cb(null, true);
    cb(new Error(`Origin ${origin} no autorizado`));
  },
  credentials: true
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de API bajo /api
app.use('/api', GetData);
app.use('/api', SubmitMessage);

// En producción, servir el build de React
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, 'client', 'build');
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

// Levantar el servidor
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en http://${HOST}:${PORT}`);
});
