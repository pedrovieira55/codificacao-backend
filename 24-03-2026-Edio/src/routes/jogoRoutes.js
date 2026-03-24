import express from 'express'
import { jogoService } from '../services/jogoService.js'

const route = express.Router()


route.get("/", (req, res) => {
    res.json(jogoService.getAll())
})

route.get("/:id", (req, res) => {
    const { id } = req.params

    const jogo = jogoService.getById(id)
    if (!jogo) {
        res.status(404).json({ message: "Jogo não encontrado" })
    }

    res.json(jogo)
})

export default route