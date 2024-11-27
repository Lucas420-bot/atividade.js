/**
 * Exibe as palavras de um array em ordem reversa.
 * Este script recebe um array de palavras e usa um loop for reverso para exibir cada palavra no console.
 *
 * @param {string[]} palavras - O array contendo as palavras a serem exibidas.
 */
function exibirPalavrasReverso(palavras) {
    // Loop reverso para percorrer o array de palavras
    for (let i = palavras.length - 1; i >= 0; i--) {
      console.log(palavras[i]); // Exibe cada palavra no console
    }
  }
  
  // Chama a função passando um array de palavras
  exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
  