const express = require('express');
const router = express.Router();

// Dados mocados (Lista de frutas)
const frutas = [
  { id: 1, nome: "Maçã", cor: "Vermelha", preco: 2.50 },
  { id: 2, nome: "Banana", cor: "Amarela", preco: 1.20 },
  { id: 3, nome: "Uva", cor: "Roxa", preco: 4.00 },
  { id: 4, nome: "Laranja", cor: "Laranja", preco: 3.00 }
];

// Rota getAll - Retorna todas as frutas
router.get('/frutas', (req, res) => {
  res.json(frutas);
});

// Rota getById - Retorna uma fruta específica pelo ID
router.get('/frutas/:id', (req, res) => {
  const idParam = parseInt(req.params.id); // Pega o ID da URL e transforma em número
  const frutaEncontrada = frutas.find(fruta => fruta.id === idParam); // Busca na lista

  if (frutaEncontrada) {
    res.json(frutaEncontrada); // Se achar, retorna a fruta
  } else {
    res.status(404).json({ erro: "Fruta não encontrada" }); // Se não achar, retorna erro 404
  }
});

module.exports = router;