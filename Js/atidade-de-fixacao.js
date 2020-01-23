var nome = prompt('Qual é o seu nome?');

var altura = prompt(nome + ', qual é a sua altura?');

var peso = prompt('Ok! Agora nos informe o seu peso:');

parseFloat(altura);
parseFloat(peso);

var altura_metro = altura/100;

var massa_corporal = peso / altura_metro;

document.write(massa_corporal);