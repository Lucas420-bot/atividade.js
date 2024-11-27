/**
 * Calcula a média das notas de cada aluno e exibe o nome e a média.
 * Este script cria um array de alunos onde cada aluno tem um array com suas notas.
 * Um loop aninhado é usado para calcular a média de cada aluno e exibir as informações.
 */
function calcularMediaAlunos() {
    // Array de alunos com suas respectivas notas
    let alunos = [
      { nome: "João", notas: [8, 7, 9] },
      { nome: "Maria", notas: [10, 9, 8] },
      { nome: "Pedro", notas: [6, 5, 7] }
    ];
  
    // Loop para percorrer cada aluno
    for (let i = 0; i < alunos.length; i++) {
      let aluno = alunos[i]; // Pega o aluno atual
      let somaNotas = 0; // Variável para armazenar a soma das notas do aluno
  
      // Loop aninhado para percorrer as notas do aluno
      for (let j = 0; j < aluno.notas.length; j++) {
        somaNotas += aluno.notas[j]; // Soma as notas
      }
  
      // Calcula a média das notas
      let media = somaNotas / aluno.notas.length;
  
      // Exibe o nome do aluno e sua média
      console.log(`${aluno.nome}: Média = ${media.toFixed(2)}`);
    }
  }
  
  // Chama a função para calcular e exibir as médias
  calcularMediaAlunos();
  