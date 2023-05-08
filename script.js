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


function proximaPagina() {
    window.location.href = "pagina2.html";
}

const progressBar = document.querySelector('.progress-bar');
const nextPageBtn = document.querySelector('#next-page-btn');

let progress = 0;

nextPageBtn.addEventListener('click', () => {
  // Adiciona 25% ao progresso
  progress += 25;

  // Atualiza a largura da barra de progresso e a porcentagem
  progressBar.style.width = `${progress}%`;
  progressBar.setAttribute('aria-valuenow', progress);
  progressBar.textContent = `${progress}% completo`;
});


//aparecer a seccao quando marca SIM//

const qualCirurgia = document.getElementById('qual_cirurgia');
  const nao = document.getElementById('nao');
  const sim = document.getElementById('sim');

  nao.addEventListener('click', function() {
    qualCirurgia.style.display = 'none';
  });

  sim.addEventListener('click', function() {
    qualCirurgia.style.display = 'block';
  });