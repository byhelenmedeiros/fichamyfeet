

function proximaPagina() {
    window.location.href = "pagina2.html";
}

const progressBar = document.querySelector('.progress-bar');
const nextPageBtn = document.querySelector('#btn btn-primary');


// aparecer a seção quando marca SIM para cirurgia
const qualCirurgia = document.getElementById('qual_cirurgia');
const nao = document.getElementById('nao');
const sim = document.getElementById('sim');

nao.addEventListener('click', function() {
  qualCirurgia.style.display = 'none';
});

sim.addEventListener('click', function() {
  qualCirurgia.style.display = 'block';
});

const esporteSimRadio = document.getElementById("esporte-sim");
const esporteQualContainer = document.getElementById("esporte-qual-container");

esporteSimRadio.addEventListener("click", function() {
  esporteQualContainer.style.display = "block";
});

const esporteNaoRadio = document.getElementById("esporte-nao");

esporteNaoRadio.addEventListener("click", function() {
  esporteQualContainer.style.display = "none";
});

const medicamentoSimRadio = document.getElementById("medicamento-sim");
const medicamentoQualContainer = document.getElementById("medicamento-qual-container");

medicamentoSimRadio.addEventListener("click", function() {
  medicamentoQualContainer.style.display = "block";
});

const medicamentoNaoRadio = document.getElementById("medicamento-nao");

medicamentoNaoRadio.addEventListener("click", function() {
  medicamentoQualContainer.style.display = "none";
});



document.getElementById('meuFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário

  // Obtenha os dados do formulário
  const formData = new FormData(this);

  // Crie uma solicitação AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'seu_arquivo_php.php', true);

  // Defina o cabeçalho apropriado para enviar dados de formulário
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Manipulador de eventos para quando a solicitação AJAX for concluída
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Atualize o elemento HTML com a resposta do servidor
      document.getElementById('resultado').innerHTML = xhr.responseText;
    }
  };

  // Envie os dados do formulário como corpo da solicitação AJAX
  xhr.send(new URLSearchParams(formData));
});
