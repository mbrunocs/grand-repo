// Exercício: 1x1 da Raínha

let queenPos = [1,4];
let oponePos = [8,6];

let possivelAtk = false;

//verificando linha coluna
if (queenPos[0] = oponePos[0] || queenPos[1] === oponePos[1]){
  possivelAtk = true;
  console.log('É possível atacar horizontal ou vertical?');
  console.log(possivelAtk);
}

//verificando diagonal direita
for (let x = queenPos[0]; x < 8; ){
  console.log();
}