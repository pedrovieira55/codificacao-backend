import express from 'express'
import clinicaRoutes from './routes/clinicaRoutes.js' // Mudamos aqui

const app = express()
const port = 3000

app.use(express.json())

// Se quiser que o link no navegador seja /clinicas em vez de /fruits
app.use("/clinicas", clinicaRoutes) 

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})