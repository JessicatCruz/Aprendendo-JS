// funções anônimas são funções que não possui nome; 
// para chamar uma função anônima é necessário associar ela a uma variável, 
// o javaScript permite não só valores sejam associados a variáveis mas também funções; 


var exibirSaudacoes = function (nome) {
    document.write('Olá ' + nome + ',tudo bem?');
}

exibirSaudacoes('Jéssica'); 