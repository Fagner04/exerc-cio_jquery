$(document).ready(function() {
    // Função para adicionar nomes à lista
    $('#adicionarNome').click(function() {
        const nome = $('#nome').val(); // Pega o valor do campo de texto

        if (nome) {
            // Adiciona linha e item na lista com botão de apagar
            $('#lista-nomes').append('<hr>'); 
            $('#lista-nomes').append('<li>' +'✔️'+ nome  + '</li>');
            $('#nome').val(''); // Limpa o campo de texto
        } else {
            alert('Por favor, insira um nome.');
        }
    });

    // Função para riscar itens da lista
    $('#lista-nomes').on('click', 'li', function() {
        $(this).toggleClass('riscado'); // Adiciona ou remove a classe 'riscado'
    });

});
