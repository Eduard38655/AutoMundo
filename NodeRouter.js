// server.js
import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import GetData from './BackedControled/GetData.js';
import SubmitMessage from './BackedControled/SubmitMessage.js';

const app = express();

// 1) Configuración de CORS
const allowedOrigins = [
  'http://localhost:5173',
  'https://eduard38655.github.io',
  'https://automundo.onrender.com'
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error(`Origen ${origin} no permitido por CORS`));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);

// 2) Middlewares de body-parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3) Directorio de archivos estáticos (build de tu front)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientBuildPath = path.join(__dirname, 'build'); 
app.use(express.static(clientBuildPath));

// SPA fallback: cualquier ruta no API envía index.html
app.get('*', (req, res, next) => {
  const apiRoutes = ['/GetData', '/SubmitMessage'];
  if (apiRoutes.some(route => req.path.startsWith(route))) {
    return next();
  }
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// 4) Montaje de routers
app.use('/GetData', GetData);
app.use('/SubmitMessage', SubmitMessage);

// 5) Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
});
