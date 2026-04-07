
Respostas das perguntas 

PATCH (Atualização Parcial): * O que faz: Altera apenas os campos enviados no JSON.

Lógica: Usa o operador spread (...) para manter os dados antigos e "remendar" apenas o que mudou.

Vantagem: Mais leve e evita perda de dados acidental em campos não enviados.

PUT (Substituição Completa): * O que faz: Substitui o objeto inteiro pela nova versão enviada.

Lógica: O objeto antigo é descartado e um novo é criado com o mesmo ID.

Risco: Se você esquecer de enviar um campo (ex: cor ou preço), esse dado será perdido no banco de dados.