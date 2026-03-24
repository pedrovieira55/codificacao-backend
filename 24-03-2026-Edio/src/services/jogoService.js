const jogos = [
  { id: 1, nome: "Rocket league", preco: 60.00 },
  { id: 2, nome: "Resident Evil Requiem", preco: 300.00 },
  { id: 3, nome: "Assassin's Creed: Unity",  preco: 150.00 },
  { id: 4, nome: "Naruto Storm 3",  preco: 70.00 }
];

class JogoService { 
  getAll() {
    return jogos;
  }
  
  getById(id) {
    return jogos.find((jogo) => jogo.id === parseInt(id));
  }
}


export const jogoService = new JogoService();