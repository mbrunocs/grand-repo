/* 
Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
n = 5;
*****
*****
*****
*****
*****/

let n = 0;
let asteriscos = '';

if (n > 1){
  for (let cont = 0; cont < n; cont+= 1){
    asteriscos += '*';
  }
  for (let cont2 = 0; cont2 < n; cont2 += 1){
    console.log(asteriscos);
  }
} 