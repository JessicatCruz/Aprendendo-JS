// funções de callback nada mais são do que funções encaminhadas como parametros para outras funções; 
// o objetivo é após a finalização da função ter condições de chamar a função passada como parametro, dando 
// continuidade na lógica da aplicação;

function exibirArtigo(id, callbackSucesso, callbackErro) {
     if (true) { // na resposta de sucesso é apresentada um Título e uma descrição
         callbackSucesso('Funções de callback em JS', 'Funções de callback são....');
     }else{ //na resposta de erro é apresentada uma mensagem de erro
         callbackErro('Erro ao recuperar os dados');
     }
}

// aqui associamos funções a uma variável para tratar cada tipo de resposta para ser exibida ao usuário

var callbackSucesso = function (titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>');
    document.write('</ hr>');
    document.write('<p>' + descricao + '</p>');
}

var callbackErro = function (erro) {
    document.write('<p><b> Erro: </b>' + erro + '</p>');
    
}

exibirArtigo(1, callbackSucesso, callbackErro);