function calcularAreaTerreno(largura, comprimento) {
    
    var area = largura * comprimento;

    return area
}

var largura = prompt('Qual é a largura do terreno em metros?');

var comprimento = prompt('Qual é o comprimento do terreno em metros? ');


var area = calcularAreaTerreno(largura, comprimento);

document.write('O terreno possui ' + area + ' metros quadrados');