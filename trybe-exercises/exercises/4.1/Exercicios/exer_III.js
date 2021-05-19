/* Exercício 3
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
*/
let a = 1;
let b = 2;
let c = 3;

if (a > b && a > c){
  console.log('O valor '+a+' é maior do que '+b+' e '+c+'.');
} else if (b > c ) {
  console.log('O valor '+b+' é maior do que '+a+' e '+c+'.');
} else if (c > b){
  console.log('O valor '+c+' é maior do que '+a+' e '+b+'.');
} else {
  console.log('Os maiores valores são iguais');
}