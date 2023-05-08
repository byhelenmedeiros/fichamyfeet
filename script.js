$(document).ready(function() {
    // Seleciona o formulário e adiciona um listener para o evento submit
    $('form').submit(function(event) {
        event.preventDefault(); // Impede o formulário de ser enviado

        // Incrementa o valor do progresso em 25%
        $('.progress-bar').css('width', '+=25%').attr('aria-valuenow', parseInt($('.progress-bar').attr('aria-valuenow')) + 25);

        // Se a barra de progresso atingir 100%, exibe uma mensagem de conclusão
        if ($('.progress-bar').attr('aria-valuenow') == 100) {
            $('.progress-bar').addClass('bg-success');
            $('.text-progress').text('Ficha de anamnese concluída!');
            $('form :input').prop('disabled', true); // Desabilita todos os campos do formulário
            $('form :submit').prop('disabled', true).removeClass('btn-primary').addClass('btn-secondary'); // Desabilita o botão de envio do formulário
        }
    });
});
