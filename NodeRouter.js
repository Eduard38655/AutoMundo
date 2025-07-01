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
    'http://10.0.0.86:5173/AutoMundo/',
    "http://172.30.208.1:5173/",
      "http:// 255.255.240.0/",
      "http://172.30.208.1/",
      "http://172.30.208.1/",
      'http://localhost:3000/GetData',
      'http://localhost:3000/SubmitMessage',
      'http://localhost:3000/ ',
      'https://eduard38655.github.io',
      ' http://172.30.208.1:5173/AutoMundo/',
      'http://10.0.0.86:5173/AutoMundo/',
      'https://automundo.onrender.com',
      'https://automundo.onrender.com/GetData',
      'https://automundo.onrender.com/SubmitMessage',
      'https://automundo.onrender.com/',
      'https://automundo.onrender.com/AutoMundo/',
      'https://automundo.onrender.com/AutoMundo-Coches',
      'https://automundo.onrender.com/AutoMundo-Nosotros',
      'https://automundo.onrender.com/AutoMundo-Contacto', 
      'https://eduard38655.github.io/AutoMundo/AutoMundo-Coches',
      'https://eduard38655.github.io/AutoMundo',
      'https://localhost:3000/GetData',
      'https://automundo.onrender.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization',"Bearer mi-token-de-autorizacion"],
  credentials: true
}));
 

// 2) Middlewares de body‑parsing y estáticos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'index.html','AutoMundo/AutoMundo','AutoMundo','src','Container','HomeComponents',)));
 
// 3) Tus routers
app.use('/', GetData);
app.use('/', SubmitMessage);
 
const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
});