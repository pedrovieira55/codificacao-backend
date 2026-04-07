import express from 'express'
// Importando o arquivo de rotas das frutas
import fruitRoutes from './routes/fruitRoutes.js'

const app = express()
const port = 3000

// Middleware para o Express entender JSON no corpo (body) das requisições
app.use(express.json());

// Definindo a rota base como /frutas conforme o exercício pede
app.use("/frutas", fruitRoutes);

app.listen(port, () => {
    console.log(` Servidor de Frutas rodando em http://localhost:${port}`);
    console.log(`Dica: Teste GET http://localhost:${port}/frutas no Thunder Client`);
});