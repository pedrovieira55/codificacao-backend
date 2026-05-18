import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import notasRoutes from './routes/notasRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Serve o Frontend (HTML)
app.use(express.static(path.join(__dirname, '../public')));

// Rotas da API
app.use('/notas', notasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servidor rodando na porta http://localhost:${PORT}`);
});