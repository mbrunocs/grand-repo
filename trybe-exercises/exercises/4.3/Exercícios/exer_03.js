/*
n = 5

    *
   **
  ***
 ****
*****/

let n = 6;
let asteriscos = '';

if (n > 1){
  for (let cont = 0; cont < n; cont+= 1){
    if (asteriscos === ''){
      for (let index = 0; index < n; index += 1){
        asteriscos += ' ';
      }
    }
    asteriscos[n-1-cont] = '*';    
    console.log(asteriscos);
  }
} 