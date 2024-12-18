const numero = Number(prompt('Digite um número!'));
// numero = Number(numero); // nesse caso, muda a variavel de 'const' para 'let'
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada é: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero}, é um número inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Ele é NaN? ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo fica: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima fica: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casa decimais fica assim: ${Math.ceil(numero)}.</p>`;