/* Exercício 6
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

let peca = 'tOrRe';

console.log('Verificando peça: '+(peca = peca.toLowerCase()) );

switch (peca){
  case 'peão':
    console.log('1 ou 2 casas à frente.');
  break;
  case 'torre':
    console.log('vertical e horizontal');
  break;
  case 'pispo':
    console.log('diagonal');
  break;
  case 'cavalo':
    console.log('3 casas em L');
  break;
  case 'rei':
    console.log('1 casa em qualquer direção.');
  break;
  case 'rainha':
    console.log('Qualquer direção');
  break;
  default:
    console.log('Erro: Peça Inválida');
}