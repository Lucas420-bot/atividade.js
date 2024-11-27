/**
 * Gerencia um estoque de itens.
 * Este script cria um estoque com 4 itens iniciais, atualiza o segundo item e exibe o total de itens no estoque.
 */
function gerenciarEstoque() {
    // Cria um array 'estoque' com 4 itens iniciais
    let estoque = ["Arroz", "Feijão", "Macarrão", "Óleo"];
  
    // Atualiza o segundo item do array (índice 1)
    estoque[1] = "Açúcar";
  
    // Exibe o número total de itens no estoque
    console.log("Número total de itens no estoque:", estoque.length);
  }
  
  // Chama a função para gerenciar o estoque
  gerenciarEstoque();
  