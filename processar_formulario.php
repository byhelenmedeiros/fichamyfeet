<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Recupera os valores enviados pelo formulário
  $nome = $_POST["nome"];
  $sobrenome = $_POST["sobrenome"];
  $dataNascimento = $_POST["data-nascimento"];
  $cidade = $_POST["cidade"];
  $sexo = $_POST["sexo"];
  $contato = $_POST["contato"];
  $meia = $_POST["meia"];
  $tipoMeia = $_POST["tipo-meia"];
  $numeroCalcado = $_POST["numero-calcado"];
  $cirurgia = $_POST["cirurgia"];
  $qualCirurgia = $_POST["qual_cirurgia"];
  $esporte = $_POST["esporte"];
  $esporteQual = $_POST["esporte_qual"];
  $medicamento = $_POST["medicamento"];
  $medicamentoQual = $_POST["medicamento_qual"];
  $gravida = $_POST["gravida"];
  $sensibilidadeDor = $_POST["sensibilidade-dor"];
  $possuiMarcaPasso = isset($_POST["possui-marca-passo"]) ? $_POST["possui-marca-passo"] : "";
  $possuiPressaoAlta = isset($_POST["possui-pressao-alta"]) ? $_POST["possui-pressao-alta"] : "";
  $possuiConvulsoes = isset($_POST["possui-convulsoes"]) ? $_POST["possui-convulsoes"] : "";
  $possuiAntecedentesCancer = isset($_POST["possui-antecedentes-cancer"]) ? $_POST["possui-antecedentes-cancer"] : "";
  $possuiDiabetes = isset($_POST["possui-diabetes"]) ? $_POST["possui-diabetes"] : "";
  $possuiProblemasCirculatorios = isset($_POST["possui-problemas-circulatorios"]) ? $_POST["possui-problemas-circulatorios"] : "";

  // Conecta ao banco de dados
  $servername = "localhost";
  $username = "myfeet";
  $password = "admin";
  $dbname = "db_ficha";
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Verifica a conexão com o banco de dados
  if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
  }

  // Prepara a query SQL para inserir os dados no banco de dados
  $sql = "INSERT INTO tabela (nome, sobrenome, data_nascimento, cidade, sexo, contato, meia, tipo_meia, numero_calcado, cirurgia, qual_cirurgia, esporte, esporte_qual, medicamento, medicamento_qual, gravida, sensibilidade_dor, possui_marca_passo, possui_pressao_alta, possui_convulsoes, possui_antecedentes_cancer, possui_diabetes, possui_problemas_circulatorios)
          VALUES ('$nome', '$sobrenome', '$dataNascimento', '$
          '$cidade', '$sexo', '$contato', '$meia', '$tipoMeia', '$numeroCalcado', '$cirurgia', '$qualCirurgia', '$esporte', '$esporteQual', '$medicamento', '$medicamentoQual', '$gravida', '$sensibilidadeDor', '$possuiMarcaPasso', '$possuiPressaoAlta', '$possuiConvulsoes', '$possuiAntecedentesCancer', '$possuiDiabetes', '$possuiProblemasCirculatorios')";
  
  if ($conn->query($sql) === TRUE) {
    echo "Dados inseridos com sucesso!";
  } else {
    echo "Erro ao inserir os dados: " . $conn->error;
  }
  
  // Fecha a conexão com o banco de dados
  $conn->close();
}
?>