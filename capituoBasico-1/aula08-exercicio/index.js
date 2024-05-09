/*/
Lucivaldo Junior tem 36 anos, pesa 14o kg
tem 2.0 de altura e seu IMC é de 40.9876
Lucivaldo Junior nasceu em 1987.
*/

const nome = 'Lucivaldo';
const sobrenome = 'Junior';
const idade = 37; 
const peso = 140;
const altura = 2.0;
let imc = peso / (altura * altura); // peso / (altura * altura)
let anoNascimento = 1987;

imc = peso / (altura * altura);
anoNascimento = 2024 - idade;

// Uma maneira;
// console.log(nome, sobrenome, 'tem', idade, 'anos, e pesa', peso,'kg.');
// console.log('Ele tem', altura, 'de altura e seu IMC é de', imc);
// console.log(nome, 'e nasceu', anoNascimento, '.');

// Segunda maneira;
// console.log(nome + ' ' + sobrenome + 'tem' + idade + 'anos, e pesa ' + peso + ' kg.');
// console.log('Ele tem ' + altura + ' mts de altura e seu IMC é de ' + imc + '.');
// console.log(nome + ' nasceu em ' + anoNascimento + '.');

// E a maneira mais simples e pratica de executar seu código.
// Que é através de: Template Strings.
console.log(`${nome} ${sobrenome} tem ${idade} amos e pesa ${peso} kg`);
console.log(`tem ${altura} mts de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);