import fs from "fs/promises";

const FILE_PATH = "./fruits.json";

// ==========================================
// 1. Funções de manipulação de arquivo base
// ==========================================
async function readFruits() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeFruits(fruits) {
  const data = JSON.stringify(fruits, null, 2);
  await fs.writeFile(FILE_PATH, data, "utf-8");
}

// ==========================================
// 2. Funções de Operação (CRUD)
// ==========================================
async function getAllFruits() {
  return await readFruits();
}

// Função atualizada: recebe cor e preco, e impede duplicados
async function createFruit(nome, cor, preco) {
  const fruits = await readFruits();
  
  // Verifica se já existe (ignorando maiúsculas/minúsculas)
  const alreadyExists = fruits.some(
    item => item.nome.toLowerCase() === nome.toLowerCase()
  );

  if (alreadyExists) {
    console.log(`❌ Erro: A fruta "${nome}" já está cadastrada.`);
    return null;
  }

  const newFruit = {
    id: fruits.length > 0 ? fruits[fruits.length - 1].id + 1 : 1,
    nome: nome,
    cor: cor,     // Novo campo
    preco: preco  // Novo campo
  };

  fruits.push(newFruit);
  await writeFruits(fruits);
  console.log(`✅ Sucesso: Fruta "${nome}" adicionada! (Cor: ${cor}, Preço: R$${preco})`);
  return newFruit;
}

// Nova função: Buscar fruta pelo nome
async function findFruitByName(nome) {
  const fruits = await readFruits();
  const fruit = fruits.find(
    item => item.nome.toLowerCase() === nome.toLowerCase()
  );

  if (fruit) {
    console.log(`🔍 Encontrada: [ID ${fruit.id}] ${fruit.nome} | Cor: ${fruit.cor} | Preço: R$${fruit.preco}`);
    return fruit;
  } else {
    console.log(`❓ Aviso: Nenhuma fruta encontrada com o nome "${nome}".`);
    return null;
  }
}

async function deleteFruit(id) {
  const fruits = await readFruits();
  const index = fruits.findIndex(item => item.id === Number(id));

  if (index === -1) {
    console.log(`❌ Erro: Falha ao deletar. Fruta com ID ${id} não foi encontrada.`);
    return false;
  }

  const [removida] = fruits.splice(index, 1);
  await writeFruits(fruits);
  console.log(`🗑️ Sucesso: A fruta "${removida.nome}" (ID: ${id}) foi removida do sistema.`);
  return true;
}


async function resetFruitsFile() {
  await writeFruits([]);
  console.log("🧹 Sucesso: O arquivo fruits.json foi limpo/resetado.");
}



async function runTests() {
  console.log("🚀 Executando Operações...\n");


  console.log("--- CADASTRANDO FRUTAS ---");
  await createFruit("Pitaya", "Rosa", 15.90);
  await createFruit("Manga", "Amarela", 4.50);
  await createFruit("Limão", "Verde", 2.00);

  console.log("\n--- TESTANDO DUPLICATAS ---");
  await createFruit("pitaya", "Amarela", 20.00); 

  console.log("\n--- BUSCANDO FRUTAS ---");
  await findFruitByName("manga");
  await findFruitByName("Morango"); 

  console.log("\n--- REMOVENDO FRUTAS ---");
  await deleteFruit(1);

  console.log("\n📊 ESTADO ATUAL DO ARQUIVO:");
  const listaFinal = await getAllFruits();
  console.table(listaFinal);
}

runTests();