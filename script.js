// Verifica se o formulário existe na página
const formulario = document.getElementById('meuFormulario');
if (formulario) {
  // Se o formulário existir, adiciona o evento de envio
  formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Captura os dados do formulário
    const formData = new FormData(formulario);

    // Envia os dados para a próxima página
    window.location.href = "pagina2.php?" + new URLSearchParams(formData).toString();
  });
}



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


  // Obtenha os dados do formulário
  const formData = new FormData(document.getElementById('meuFormulario'));

  // Crie uma solicitação AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'pagina2.php', true);

  // Defina o cabeçalho apropriado para enviar dados de formulário
  // No caso de envio de dados usando FormData, o cabeçalho 'Content-Type' é definido automaticamente

  // Manipulador de eventos para quando a solicitação AJAX for concluída
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Atualize o elemento HTML com a resposta do servidor
      document.getElementById('resultado').innerHTML = xhr.responseText;
    }
  };

  // Envie os dados do formulário como corpo da solicitação AJAX
  xhr.send(formData);





  function enviarDadosParaBancoDeDados() {
    // Capturar os valores dos campos do formulário
    var meia = document.getElementById("meia").value;
    var tipoMeia = document.getElementById("tipo-meia").value;
    var numeroCalcado = document.getElementById("numero-calcado").value;
    var cirurgia = document.querySelector('input[name="cirurgia"]:checked').value;
    var qualCirurgia = document.getElementById("qual_cirurgia").value;
    var esporte = document.querySelector('input[name="esporte"]:checked').value;
    var esporteQual = document.getElementById("esporte-qual-container").value;
    var medicamento = document.querySelector('input[name="medicamento"]:checked').value;
    var medicamentoQual = document.getElementById("medicamento-qual-container").value;
    var gravida = document.querySelector('input[name="gravida"]:checked').value;
    var sensibilidadeDor = document.querySelector('input[name="sensibilidade-dor"]:checked').value;
    var possuiMarcaPasso = document.getElementById("possui-marca-passo").checked;
    var possuiPressaoAlta = document.getElementById("possui-pressao-alta").checked;
    var possuiConvulsoes = document.getElementById("possui-convulsoes").checked;
    var possuiAntecedentesCancer = document.getElementById("possui-antecedentes-cancer").checked;
    var possuiDiabetes = document.getElementById("possui-diabetes").checked;
    var possuiProblemasCirculatorios = document.getElementById("possui-problemas-circulatorios").checked;
  
    // Criar um objeto com os dados do formulário
    var dadosFormulario = {
      meia: meia,
      tipoMeia: tipoMeia,
      numeroCalcado: numeroCalcado,
      cirurgia: cirurgia,
      qualCirurgia: qualCirurgia,
      esporte: esporte,
      esporteQual: esporteQual,
      medicamento: medicamento,
      medicamentoQual: medicamentoQual,
      gravida: gravida,
      sensibilidadeDor: sensibilidadeDor,
      possuiMarcaPasso: possuiMarcaPasso,
      possuiPressaoAlta: possuiPressaoAlta,
      possuiConvulsoes: possuiConvulsoes,
      possuiAntecedentesCancer: possuiAntecedentesCancer,
      possuiDiabetes: possuiDiabetes,
      possuiProblemasCirculatorios: possuiProblemasCirculatorios
    };
  
    // Enviar os dados para o servidor
    fetch('processar_formulario.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosFormulario)
    })
    .then(response => {
      // Verificar se a requisição foi bem-sucedida
      if (response.ok) {
        // Dados enviados com sucesso
        console.log('Dados enviados para o banco de dados.');
      } else {
        // Ocorreu um erro ao enviar os dados
        console.error('Erro ao enviar os dados para o banco de dados.');
      }
    })
    .catch(error => {
      // Ocorreu um erro na requisição
      console.error('Erro na requisição:', error);
    });
  }
