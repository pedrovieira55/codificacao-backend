import { Router } from 'express';
import { fruitService } from '../services/fruit.service.js';

const router = Router();

// GET - Listar todas
router.get('/', (req, res) => res.json(fruitService.getAll()));

// PATCH - Atualização parcial (EXERCÍCIO 1)
router.patch('/:id', (req, res) => {
    const atualizada = fruitService.patch(req.params.id, req.body);
    if (atualizada) res.json(atualizada);
    else res.status(404).json({ message: "Fruta não encontrada" });
});

// PUT - Substituição completa (EXERCÍCIO 2)
router.put('/:id', (req, res) => {
    const substituida = fruitService.update(req.params.id, req.body);
    if (substituida) res.json(substituida);
    else res.status(404).json({ message: "Fruta não encontrada" });
});

// POST - Criar nova
router.post('/', (req, res) => {
    const nova = fruitService.create(req.body);
    res.status(201).json(nova);
});

export default router;