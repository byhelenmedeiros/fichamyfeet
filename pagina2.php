<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- CSS do Bootstrap -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css">

      <!-- jQuery -->
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

      <!-- JS do Bootstrap -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.min.js"></script>


    <link rel="stylesheet" type="text/css" href="style.css">


    <title>Ficha de anamnese - Myfeet </title>
</head>
<body>

<form action="pagina2.php" method="post">
  
    <div class="container d-flex justify-content-center">
        <div class="row col-lg-8">
          <div class="col text-center">
            <h1 class="text-success"> Ficha anamnese podológica - MyFeet</h1>
          </div>
          <p>Preencher a ficha de anamnese de podologia é um processo crucial para o profissional de podologia entender o histórico médico do paciente, incluindo condições pré-existentes, histórico de lesões nos pés e possíveis alergias. </p>

          <form id="meuFormulario">
            <div class="form-group">
              <label for="meia">Tipo de meia que mais usa:</label>
              <input type="text" class="form-control" id="meia" name="meia" placeholder="Digite o tipo de meia">
            </div>
          
            <div class="form-group row">
              <div class="col-sm-8">
                <label for="tipo-meia">Tipo de calçado que mais usa:</label>
                <input type="text" class="form-control" id="tipo-meia">
              </div>
              <div class="col-sm-4">
                <label for="numero-calcado">Nº:</label>
                <input type="number" class="form-control" id="numero-calcado">
              </div>
            </div>

            <div class="form-group">
              <label for="cirurgia">Já fez alguma cirurgia nos membros inferiores?</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="cirurgia" id="sim" value="sim" onclick="document.getElementById('qual_cirurgia').style.display = 'block';">
                <label class="form-check-label" for="sim">Sim</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="cirurgia" id="nao" value="nao" onclick="document.getElementById('qual_cirurgia').style.display = 'none';">
                <label class="form-check-label" for="nao">Não</label>
              </div>
            </div>
            <div class="form-group" id="qual_cirurgia" style="display: none;">
              <label>Qual?</label>
              <input type="text" class="form-control" name="qual_cirurgia" placeholder="Digite aqui">
            </div>
            <div class="form-group">
              <label for="esporte">Pratica Algum Esporte?</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="esporte" id="esporte-sim" value="sim">
                <label class="form-check-label" for="sim">Sim</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="esporte" id="esporte-nao" value="nao">
                <label class="form-check-label" for="nao">Não</label>
              </div>
            </div>
            <div class="form-group" id="esporte-qual-container" style="display: none;">
              <label>Qual?</label>
              <input type="text" class="form-control" name="esporte_qual" placeholder="Digite aqui o esporte">
            </div>
            <div class="form-group">
              <label for="medicamento">Toma Algum Medicamento?</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="medicamento" id="medicamento-sim" value="sim">
                <label class="form-check-label" for="sim">Sim</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="medicamento" id="medicamento-nao" value="nao">
                <label class="form-check-label" for="nao">Não</label>
              </div>
            </div>
            <div class="form-group" id="medicamento-qual-container" style="display: none;">
              <label>Qual?</label>
              <input type="text" class="form-control" name="medicamento_qual" placeholder="Digite aqui o medicamento">
            </div>
            <div class="form-group">
              <label for="medicamento">Está Grávida?</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gravida" id="gravida-sim" value="sim">
                <label class="form-check-label" for="sim">Sim</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gravida" id="gravida-nao" value="nao">
                <label class="form-check-label" for="nao">Não</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gravida" id="naoaplica" value="nao">
                <label class="form-check-label" for="nao">Não se aplica</label>
              </div>
            </div>

            <div class="form-group">
              <label for="sensibilidade-dor">Sensibilidade à Dor:</label>
              <div class="d-flex">
                <div class="form-check form-check-inline mr-4">
                  <input class="form-check-input" type="radio" name="sensibilidade-dor" id="muita-dor" value="muita">
                  <label class="form-check-label" for="muita-dor">Muita</label>
                </div>
                <div class="form-check form-check-inline mr-4">
                  <input class="form-check-input" type="radio" name="sensibilidade-dor" id="suportavel-dor" value="suportavel">
                  <label class="form-check-label" for="suportavel-dor">Suportável</label>
                </div>
                <div class="form-check form-check-inline mr-4">
                  <input class="form-check-input" type="radio" name="sensibilidade-dor" id="pouca-dor" value="pouca">
                  <label class="form-check-label" for="pouca-dor">Pouca</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="sensibilidade-dor" id="nenhuma-dor" value="nenhuma">
                  <label class="form-check-label" for="nenhuma-dor">Nenhuma</label>
                </div>
              </div>
            </div>


            <div class="form-group">
              <label for="possui">Possui:</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="possui-marca-passo" value="marca-passo">
                <label class="form-check-label" for="possui-marca-passo">Marca-passo ou pinos</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="possui-pressao-alta" value="pressao-alta">
                <label class="form-check-label" for="possui-pressao-alta">Pressão Alta</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="possui-convulsoes" value="convulsoes">
                <label class="form-check-label" for="possui-convulsoes">Convulsões</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="possui-antecedentes-cancer" value="antecedentes-cancer">
                <label class="form-check-label" for="possui-antecedentes-cancer">Antecedentes cancerígenos</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="possui-diabetes" value="diabetes">
                <label class="form-check-label" for="possui-diabetes">Diabetes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="possui-problemas-circulatorios" value="problemas-circulatorios">
                <label class="form-check-label" for="possui-problemas-circulatorios">Problemas Circulatórios</label>
              </div>
            </div>
            
            
            <div class="form-group">
              <label for="termos-condicoes" class="form-check-label">
                <input class="form-check-input" type="checkbox" id="termos-condicoes" required>
                Li e concordo com os termos e condições
              </label>
            </div>

            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
            
            
            
            
            
          </form>
          <div class="btn-group">
            <button onclick="history.go(-1);" type="button" class="btn btn-secondary">Voltar</button>
            <button id="enviarFormulario" type="submit" class="btn btn-primary">Enviar</button>


          </div>
          
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
