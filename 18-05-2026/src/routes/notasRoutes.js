import express from 'express';
const router = express.Router();
import * as notasController from '../controllers/notasController.js';

router.get('/', notasController.listar);
router.post('/', notasController.criar);
router.delete('/:id', notasController.excluir);
router.put('/:id', notasController.editar); 

export default router;
