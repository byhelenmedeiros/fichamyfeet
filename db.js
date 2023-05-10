const mysql = require('mysql');

// Configurações da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu-usuario',
  password: 'sua-senha',
  database: 'nome-do-banco-de-dados'
});

// Função para estabelecer a conexão com o banco de dados
function conectarBancoDeDados() {
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão estabelecida com sucesso!');
    }
  });
}

// Exporta o objeto de conexão para ser utilizado em outros arquivos
module.exports = {
  connection,
  conectarBancoDeDados
};
