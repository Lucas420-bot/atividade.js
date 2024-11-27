/**
 * Jogo de adivinhação de número.
 * Este script pede ao usuário para adivinhar um número entre 1 e 10. O loop continua até que o usuário acerte o número ou digite "sair".
 * 
 * O número aleatório gerado será um valor entre 1 e 10.
 * 
 * @returns {void} Não retorna nada, apenas exibe mensagens para o usuário.
 */
function jogoAdivinhacao() {
    // Gera um número aleatório entre 1 e 10
    const numeroCorreto = Math.floor(Math.random() * 10) + 1;
    
    // Inicializa a variável para armazenar a tentativa do usuário
    let tentativa;
  
    // Loop continua até que o usuário acerte o número ou digite "sair"
    while (true) {
      // Pede ao usuário para adivinhar um número ou digitar "sair"
      tentativa = prompt("Adivinhe um número entre 1 e 10 ou digite 'sair' para sair:");
  
      // Verifica se o usuário digitou "sair"
      if (tentativa.toLowerCase() === "sair") {
        console.log("Você saiu do jogo. Até a próxima!");
        break;
      }
  
      // Converte a tentativa do usuário para número
      tentativa = Number(tentativa);
  
      // Verifica se a tentativa é um número válido
      if (isNaN(tentativa)) {
        console.log("Por favor, digite um número válido.");
        continue;
      }
  
      // Verifica se o usuário acertou o número
      if (tentativa === numeroCorreto) {
        console.log("Parabéns! Você acertou o número!");
        break;
      } else {
        console.log("Errado! Tente novamente.");
      }
    }
  }
  
  // Chama a função para iniciar o jogo
  jogoAdivinhacao();
  