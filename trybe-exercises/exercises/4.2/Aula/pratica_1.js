let num = ['1','2','3','4','5'];
let letras = ['a','b','c','d','e'];

console.log('Numeros: '+num.length);
console.log('Letras: '+letras.length);

for (let numIndex = 0; numIndex < num.length; numIndex += 1 ){
  for (let letrasIndex = 0; letrasIndex < letras.length; letrasIndex += 1){
    console.log(num[numIndex]+letras[letrasIndex]);
  }

}
