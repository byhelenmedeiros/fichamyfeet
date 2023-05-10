const { connection, conectarBancoDeDados } = import('db');

// Estabelece a conexão com o banco de dados
conectarBancoDeDados();

// Agora você pode utilizar a conexão para realizar operações no banco de dados
connection.query('SELECT * FROM nome-da-tabela', (err, results) => {
  if (err) {
    console.error('Erro ao executar consulta:', err);
  } else {
    console.log('Dados recuperados:', results);
  }
});

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



//base de dados//

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário
  enviarDadosParaBancoDeDados();
});
