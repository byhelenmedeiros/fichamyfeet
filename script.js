

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
