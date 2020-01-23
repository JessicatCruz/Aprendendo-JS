// as funções para tratativas matemáticas são acessada através do objeto Math
// o Math possui alguns atributos e alguns métodos que ajudam nas matemática mais avançadas

// o método ceil vai pegar o número fracionado e sempre arredondar o valor pra cima

var x = Math.ceil(10.380);

document.write(x);

document.write('<br />');

// o método floor mesmo que o número seja fracionado ele sempre irá considerar a parte inteira

var y = Math.floor(10.380);
document.write(y);

document.write('<br />');


// o método round leva em conta o peso da fração pra saber se arredonda para cima ou para baixo;

var a = Math.round(10.580);
document.write(a);

document.write('<br />');

//o método random fornece um número randômico, ou seja, fornece um número aleatório.

var c = Math.random();
document.write(c);

//OBS: podemos observar que o número fornecido não nem 0 e nem 1 e um valor entre os dois números