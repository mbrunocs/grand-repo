/*
Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5
*
**
***
****
*****/

let n = 5;
let asteriscos = '';

if (n > 1){
  for (let cont = 0; cont < n; cont+= 1){
    asteriscos += '*';    
    console.log(asteriscos);
  }
} 