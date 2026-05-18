let notas = [];

export const listar = (req, res) => {
    res.json(notas);
};

export const criar = (req, res) => {
    const { titulo, conteudo } = req.body;
    const novaNota = { id: Date.now(), titulo, conteudo };
    notas.push(novaNota);
    res.status(201).json(novaNota);
};

export const excluir = (req, res) => {
    const { id } = req.params;
    notas = notas.filter(n => n.id != id);
    res.status(204).send();
};
export const editar = (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo } = req.body;
    
    const index = notas.findIndex(n => n.id == id);
    
    if (index !== -1) {
        notas[index] = { id: Number(id), titulo, conteudo };
        return res.json(notas[index]);
    }
    res.status(404).json({ erro: "Nota não encontrada" });
};