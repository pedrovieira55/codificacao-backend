// Mock de dados inicial
// A lista agora contém os dados das clínicas que você escolheu
const clinicas = [
  {
    "id": 1,
    "nome": "Clínica Harmonia",
    "especialidade": "Clínica Geral",
    "contato": "11 9999-8888"
  },
  {
    "id": 2,
    "nome": "Centro de Olhos Visão",
    "especialidade": "Oftalmologia",
    "contato": "11 7777-6666"
  }
];

class ClinicaService {
    // Retorna todas as clínicas
    getAll() {
        return clinicas;
    }

    // Busca uma clínica específica pelo ID
    getById(id) {
        return clinicas.find(c => c.id === parseInt(id));
    }

    // Cria uma nova clínica com todos os campos necessários
    create(dados) {
        const newClinica = {
            id: clinicas.length > 0 ? clinicas[clinicas.length - 1].id + 1 : 1,
            nome: dados.nome,
            especialidade: dados.especialidade,
            contato: dados.contato
        };
        clinicas.push(newClinica);
        return newClinica;
    }

    // Atualiza uma clínica existente (Método PUT)
    update(id, dados) {
        const index = clinicas.findIndex(c => c.id === parseInt(id));
        if (index !== -1) {
            clinicas[index] = { 
                id: parseInt(id), 
                nome: dados.nome, 
                especialidade: dados.especialidade, 
                contato: dados.contato 
            };
            return clinicas[index];
        }
        return null;
    }

    // Remove uma clínica do array (Método DELETE)
    delete(id) {
        const index = clinicas.findIndex(c => c.id === parseInt(id));
        if (index !== -1) {
            return clinicas.splice(index, 1)[0];
        }
        return null;
    }
}

// Exportamos como clinicaService (lembre-se de atualizar a importação no seu arquivo de rotas)
export const fruitService = new ClinicaService();