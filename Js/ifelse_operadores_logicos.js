// if(2 == 2 || 3>=1 || 'a' || 'b'){
//     document.write('Verdadeiro');
// }else{
//     document.write('Falso');
// }

var n1 = prompt('Informe a prmeira nota do aluno:');
var faltas = prompt('Informe o número de faltas do aluno:');

var media = 7;

var faltas_maximas = 15;


// if (n1 >= media && faltas <= faltas_maximas) {
  // document.write('Aprovado');  
// }else{
    // document.write('Reprovado')
// }


var resultado = n1 >= media && faltas <= faltas_maximas ?  'Aprovado' : 'Reprovado';

document.write(resultado);