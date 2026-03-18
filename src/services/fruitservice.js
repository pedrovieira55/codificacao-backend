const fruits = [
    { id: 1, nome: "Abacate" },
    { id: 2, nome: "Melancia" }
]

class FruitService {
    getAll() {
        return fruits
    }
    getById(id) {
        return fruits.find((fruit) => fruit.id === parseInt(id))
    }
}

export const fruitService = new FruitService()