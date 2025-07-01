// server.js
import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import GetData from './BackedControled/GetData.js';
import SubmitMessage from './BackedControled/SubmitMessage.js';

const app = express();

// 1) Configuración de CORS
app.use(cors({
  // Para pruebas iniciales deja '*' y asegúrate de que funciona;
  // luego reemplázalo por tu lista de dominios permitidos:
  // origin: [
  //   'http://localhost:5173',
  //   'https://eduard38655.github.io',
  //   'https://automundo.onrender.com'
  // ],
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// 2) Middlewares de body‑parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3) Sirve los archivos estáticos de la carpeta build/dist de tu front
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ajusta 'dist' si tu build sale en otra carpeta (por ejemplo 'build')
app.use(express.static(path.join(__dirname, 'dist')));

// 4) Tus routers de API
app.use('/', GetData);
app.use('/', SubmitMessage);

// 5) Fallback para SPA (React Router, etc.)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 6) Arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
});
