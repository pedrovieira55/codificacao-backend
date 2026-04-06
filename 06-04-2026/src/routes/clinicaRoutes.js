import { Router } from 'express';
import { fruitService } from '../services/clinica.service.js';

const router = Router();

// Rota GET - Listar todas (Essa já estava funcionando)
router.get('/', (req, res) => {
    const clinicas = fruitService.getAll();
    res.json(clinicas);
});

// Rota GET - Buscar por ID
router.get('/:id', (req, res) => {
    const clinica = fruitService.getById(req.params.id);
    if (!clinica) return res.status(404).json({ message: "Clínica não encontrada" });
    res.json(clinica);
});

// Rota POST - Criar nova clínica
router.post('/', (req, res) => {
    const novaClinica = fruitService.create(req.body);
    res.status(201).json(novaClinica);
});

// --- ADICIONE ESTA ROTA ABAIXO PARA O PUT FUNCIONAR ---
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const atualizada = fruitService.update(id, req.body);
    
    if (atualizada) {
        res.json(atualizada);
    } else {
        res.status(404).json({ message: "Clínica não encontrada para atualizar" });
    }
});

// Rota DELETE - Caso precise remover
router.delete('/:id', (req, res) => {
    const removida = fruitService.delete(req.params.id);
    if (removida) {
        res.json({ message: "Clínica removida com sucesso" });
    } else {
        res.status(404).json({ message: "Clínica não encontrada" });
    }
});

export default router;