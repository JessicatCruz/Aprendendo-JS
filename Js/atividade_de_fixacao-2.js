var nome = prompt('Olá! Qual é o seu nome?');

var idade = prompt(nome + ', quantos anos você tem?'); 


if( idade < 15){
    document.write(nome + ',você é criança ainda!')
}
if(idade > 15 && idade <= 20){
    document.write(nome + ',você é jovem!');
}
if(idade > 20 && idade <= 49){
    document.write(nome + ', você é adulto!');
}
if(idade > 49){
    document.write(nome + ', você é idoso!');
}