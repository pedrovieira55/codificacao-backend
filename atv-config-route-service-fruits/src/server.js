import express from 'express'
import route from './routes/fruitRoutes.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/fruits", route)


app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
})
