// server.js
import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import GetDataRouter from './routes/GetData.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS: solo orígenes permitidos
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://eduard38655.github.io',
  'https://automundo.onrender.com'
];

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error(`Origen ${origin} no permitido por CORS`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Monta el router en /GetData
app.use('/GetData', GetDataRouter);

// (Opcional) Sirve frontend estático si lo tienes en build/
// const clientPath = path.join(__dirname, 'build');
// app.use(express.static(clientPath));
// app.get('*', (req, res) => res.sendFile(path.join(clientPath, 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
