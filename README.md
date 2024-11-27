# Documentação de Exercícios - JavaScript

Este repositório contém a solução de vários exercícios em JavaScript, com foco em manipulação de arrays, loops e interação com o usuário. Abaixo estão as descrições e explicações detalhadas de cada exercício.

---

## Questão 1: Gerenciamento de Lista de Tarefas

**Pedido:**
- Criar um script que gerencie uma lista de tarefas. O script deve:
  - Criar um array vazio chamado `tarefas`.
  - Adicionar três tarefas usando o método `.push()`.
  - Remover a última tarefa adicionada usando `.pop()`.
  - Exibir o array final no console.

### Descrição:
/**
 * Gerencia uma lista de tarefas.
 * Este script cria uma lista de tarefas, adiciona três tarefas, remove a última e exibe a lista final no console.
 */

### Explicação:
- **Array `tarefas`**: Um array vazio é criado para armazenar as tarefas.
- **Método `.push()`**: Adiciona três tarefas ao array.
- **Método `.pop()`**: Remove a última tarefa do array.
- **Exibição**: O array final é exibido no console.

---

## Questão 2: Gerenciamento de Estoque

**Pedido:**
- Criar um script que gerencie um estoque. O script deve:
  - Criar um array `estoque` com 4 itens iniciais.
  - Atualizar o segundo item no array.
  - Exibir o número total de itens no estoque usando `.length`.

### Descrição:
/**
 * Gerencia um estoque de itens.
 * Este script cria um estoque com 4 itens iniciais, atualiza o segundo item e exibe o total de itens no estoque.
*/

### Explicação:
- **Array `estoque`**: Inicializa o estoque com 4 itens.
- **Atualização do segundo item**: O segundo item (índice 1) é atualizado para "Açúcar".
- **Propriedade `.length`**: Exibe o número total de itens no estoque, que é 4.

---

## Questão 3: Cálculo da Média das Notas de Alunos

**Pedido:**
- Criar um script que armazene as notas de três alunos em um array aninhado. O script deve:
  - Criar um array `alunos` onde cada elemento é um array contendo as notas de um aluno.
  - Usar um loop aninhado para calcular a média das notas de cada aluno.
  - Exibir o nome de cada aluno e sua respectiva média.

### Descrição:
/**
 * Calcula a média das notas de cada aluno e exibe o nome e a média.
 * Este script cria um array de alunos onde cada aluno tem um array com suas notas.
 * Um loop aninhado é usado para calcular a média de cada aluno e exibir as informações.
 */

### Explicação:
- **Array `alunos`**: Contém objetos, cada um representando um aluno com seu nome e suas notas.
- **Loop aninhado**: O primeiro loop percorre os alunos e o segundo percorre as notas de cada aluno.
- **Cálculo da média**: A soma das notas de cada aluno é dividida pelo número de notas.
- **Exibição**: O nome de cada aluno e sua média são exibidos com 2 casas decimais.

---

## Questão 4: Exibição de Palavras em Ordem Reversa

**Pedido:**
- Criar um script que leia um array de palavras e exiba cada palavra no console em ordem reversa. O script deve:
  - Criar um array `palavras` com pelo menos 5 palavras.
  - Usar um loop `for` reverso para exibir cada palavra no console.

### Descrição:
/**
 * Exibe as palavras de um array em ordem reversa.
 * Este script recebe um array de palavras e usa um loop for reverso para exibir cada palavra no console.
 *
 * @param {string[]} palavras - O array contendo as palavras a serem exibidas.
 */

### Explicação:
- **Array `palavras`**: Contém as palavras que serão exibidas.
- **Loop `for` reverso**: O loop percorre o array de trás para frente, exibindo as palavras em ordem inversa.

---

## Questão 5: Jogo de Adivinhação

**Pedido:**
- Criar um script que peça ao usuário para adivinhar um número entre 1 e 10. O script deve:
  - Continuar pedindo números até que o usuário acerte.
  - Parar imediatamente se o usuário digitar "sair".
  - Exibir mensagens para respostas corretas e para o comando "sair".

### Descrição:
Este script pede ao usuário para adivinhar um número entre 1 e 10, continuando até que o usuário acerte ou digite "sair".

### Explicação:
- **Geração do número aleatório**: O número correto é gerado aleatoriamente entre 1 e 10.
- **Loop `while`**: Continua pedindo ao usuário para adivinhar até que ele acerte ou digite "sair".
- **Validação**: Verifica se o usuário inseriu um número válido e exibe mensagens de erro ou sucesso.

---

## Conclusão

Este repositório contém scripts simples que demonstram conceitos fundamentais do JavaScript, como manipulação de arrays, loops e interação com o usuário. Cada exercício foi desenvolvido para atender aos requisitos específicos e inclui documentação JSDoc explicando o funcionamento de cada função.

---

Este é um exemplo de como você pode organizar e documentar o código de maneira clara e estruturada para fácil compreensão.
