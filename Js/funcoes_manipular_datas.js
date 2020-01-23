// o Date é um objeto que precisa ser instanciado 

var data = new Date()

// o obeto .getDate() retorna o dia 
document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear());

document.write('<br />');

// um detalhe importante do objeti .getMonth(), ele considera os meses de 0-11 
//para ajustar a resposta para o usuário é necessário somar o valor com mais uma unidade 
