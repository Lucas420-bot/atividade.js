/**
 * Gerencia uma lista de tarefas.
 * Este script cria uma lista de tarefas, adiciona três tarefas, remove a última e exibe a lista final no console.
 */
function gerenciarTarefas() {
    // Cria um array vazio chamado tarefas
    let tarefas = [];
  
    // Adiciona três tarefas à lista
    tarefas.push("Comprar pão");
    tarefas.push("Estudar JavaScript");
    tarefas.push("Lavar a roupa");
  
    // Remove a última tarefa adicionada
    tarefas.pop();
  
    // Exibe o array final no console
    console.log(tarefas);
  }
  
  // Chama a função para gerenciar as tarefas
  gerenciarTarefas();
  