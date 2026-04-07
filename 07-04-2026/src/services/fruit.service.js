
const frutas = [
  { "id": 1, "nome": "Maça" },
];

class FruitService {
    // Retorna todas as frutas
    getAll() {
        return frutas;
    }

    // Busca por ID
    getById(id) {
        return frutas.find(f => f.id === parseInt(id));
    }

    // EXERCÍCIO 1: PATCH (Atualização Parcial)
    patch(id, dados) {
        const index = frutas.findIndex(f => f.id === parseInt(id));
        if (index !== -1) {
            
          
            frutas[index] = { ...frutas[index], ...dados };
            return frutas[index];
        }
        return null;
    }

    // EXERCÍCIO 2: PUT (Substituição Completa)
    update(id, dados) {
        const index = frutas.findIndex(f => f.id === parseInt(id));
        if (index !== -1) {
            // Substitui o objeto antigo por um novo
            // (mantendo apenas o ID original)
            frutas[index] = { id: parseInt(id), ...dados };
            return frutas[index];
        }
        return null;
    }

    // Criar nova fruta


create(dados) {
    const novaFruta = {
        // Gera um novo ID baseado no último da lista
        id: frutas.length > 0 ? frutas[frutas.length - 1].id + 1 : 1,
        nome: dados.nome
    };
    frutas.push(novaFruta);
    return novaFruta;
}
    // Deletar fruta
    delete(id) {
        const index = frutas.findIndex(f => f.id === parseInt(id));
        if (index !== -1) {
            return frutas.splice(index, 1)[0];
        }
        return null;
    }
}

export const fruitService = new FruitService();