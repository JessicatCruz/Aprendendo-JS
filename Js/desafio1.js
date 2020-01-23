var a = 10;
var b = 20;
var c = null;

document.write('A:' + a + '<br />');
document.write('B:' + b + '<br />');
document.write('C:' + c + '<br />');

document.write('<hr />');

//lógica de inversão dos valores das variáveis A e B;

    c = a //utiliza a variavel C para armazenar temporariamente o valor da var a
    a = b // sobrepõe o valor da var a com o da var b
    b = c // sobrepõe o valor da var  b com o da var c


//
document.write('A:' + a + '<br />');
document.write('B:' + b + '<br />');
document.write('C:' + c + '<br />');
