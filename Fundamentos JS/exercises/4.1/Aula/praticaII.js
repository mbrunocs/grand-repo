/* Aula assincrona Parte II
Crie uma constante chamada name e atribua a ela o seu nome (Exemplo: Carolina);
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal;
Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu;
Utilize o console.log() para imprimir as constantes e variáveis que você criou;
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔*/
const Name = "Márcio";
const BirthCity = "Santos";
let birthYear = 1991;

console.log(Name);
console.log(BirthCity);
console.log(birthYear);

birthYear = 2030;

console.log(birthYear);

BirthCity = "Belo Horizonte";
//O erro indica que a constante não pode ser alterada, pois se pudesse não seria esse propósito de uma constante.