/* Exercício 4
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/
let valor = -1;

console.log('Verificando o valor: ');
if (valor === 0){
  console.log('ZERO');
} else if (valor > 0) {
  console.log('POSITIVE');
} else {
  console.log('NEGATIVE');
}