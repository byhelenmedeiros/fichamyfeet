const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myfeet',
  password: 'admin',
  database: 'db_ficha',
});

// Função para conectar ao banco de dados
function connectToDatabase() {
  connection.connect((error) => {
    if (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    } else {
      console.log('Conexão bem-sucedida com o banco de dados!');
    }
  });
}

// Função para inserir os dados do formulário no banco de dados
function insertFormData(formData, callback) {
  const query = 'INSERT INTO cadastro SET ?';

  connection.query(query, formData, (error, results) => {
    if (error) {
      console.error('Erro ao inserir os dados no banco de dados:', error);
      callback(error, null);
    } else {
      console.log('Dados inseridos no banco de dados com sucesso!');
      callback(null, results);
    }
  });
}




// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault();

    // Conecte-se ao banco de dados
    connectToDatabase();

    // Insira os dados do formulário no banco de dados
    insertFormData(formData, (error, results) => {
      if (error) {
        console.error('Erro ao inserir os dados no banco de dados:', error);
      } else {
        console.log('Dados inseridos no banco de dados com sucesso!');
        // Realize qualquer ação adicional após a inserção dos dados
      }
    });
  }

  document.getElementById('meuFormulario').addEventListener('submit', handleSubmit);


  // Função para lidar com o envio do formulário
  function handleSubmit(event) {
    event.preventDefault();

    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const cidade = document.getElementById('cidade').value;
    const sexo = document.getElementById('sexo').value;
    const contato = document.getElementById('contato').value;
    const meia = document.getElementById('meia').value;
    const tipoMeia = document.getElementById('tipo-meia').value;
    const numeroCalcado = document.getElementById('numero-calcado').value;
    const cirurgia = document.querySelector('input[name="cirurgia"]:checked').value;
    const qualCirurgia = document.getElementById('qual_cirurgia').value;
    const praticaEsporte = document.querySelector('input[name="esporte"]:checked').value;
    const qualEsporte = document.getElementById('esporte-qual').value;
    const tomaMedicamento = document.querySelector('input[name="medicamento"]:checked').value;
    const qualMedicamento = document.getElementById('medicamento-qual').value;
    const estaGravida = document.querySelector('input[name="gravida"]:checked').value;
    const sensibilidadeDor = document.querySelector('input[name="sensibilidade-dor"]:checked').value;
    const possuiMarcaPasso = document.getElementById('possui-marca-passo').checked;
    const possuiPressaoAlta = document.getElementById('possui-pressao-alta').checked;
    const possuiConvulsoes = document.getElementById('possui-convulsoes').checked;
    const possuiAntecedentesCancer = document.getElementById('possui-antecedentes-cancer').checked;
    const possuiDiabetes = document.getElementById('possui-diabetes').checked;
    const possuiProblemasCirculatorios = document.getElementById('possui-problemas-circulatorios').checked;

    // Crie um objeto com os dados do formulário
    const formData = {
      nome: nome,
      sobrenome: sobrenome,
      dataNascimento: dataNascimento,
      cidade: cidade,
      sexo: sexo,
      contato: contato,
      meia: meia,
      tipoMeia: tipoMeia,
      numeroCalcado: numeroCalcado,
      cirurgia: cirurgia,
      qualCirurgia: qualCirurgia,
      praticaEsporte: praticaEsporte,
      qualEsporte: qualEsporte,
      tomaMedicamento: tomaMedicamento,
      qualMedicamento: qualMedicamento,
      estaGravida: estaGravida,
      sensibilidadeDor: sensibilidadeDor,
      possuiMarcaPasso: possuiMarcaPasso,
      possuiPressaoAlta: possuiPressaoAlta,
      possuiConvulsoes: possuiConvulsoes,
      possuiAntecedentesCancer: possuiAntecedentesCancer,
      possuiDiabetes: possuiDiabetes,
      possuiProblemasCirculatorios: possuiProblemasCirculatorios
    };
  }

  module.exports = {
    connectToDatabase,
    insertFormData,
  };
  