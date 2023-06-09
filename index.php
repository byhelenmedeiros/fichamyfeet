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
  
<form id="meuFormulario" action="pagina2.php" method="POST">

    <div class="container d-flex justify-content-center">
        <div class="row col-lg-8">
          <div class="col text-center">
            <h1 class="text-success"> Ficha anamnese podológica - Seus dados</h1>
          </div>
          <p>Por favor, preencha todos os campos com atenção e cuidado, pois essas informações são fundamentais para o atendimento adequado do podólogo. Todos os dados fornecidos são confidenciais e serão utilizados exclusivamente para fins de tratamento.<br> Obrigado pela colaboração.</p>
       
          <form action="pagina2.php" method="post" id="dadosPessoaisForm">
        <div class="form-group">
          <label for="nome" >Nome:</label>
          <input type="text" class="form-control" id="nome" required>
        </div>
        <div class="form-group">
          <label for="sobrenome" required >Sobrenome:</label>
          <input type="text" class="form-control" id="sobrenome">
        </div>
        <div class="form-group">
          <label for="data-nascimento">Data de Nascimento:</label>
          <input type="date" class="form-control" id="data-nascimento">
        </div>
        <div class="form-group">
          <label for="cidade">Cidade:</label>
          <input type="text" class="form-control" id="cidade">
        </div>
        <div class="form-group">
          <label for="sexo">Sexo:</label>
          <select class="form-control" id="sexo">
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
          <div class="form-group">
            <label for="contato">Contato:</label>
            <input type="number" class="form-control" id="contato" required placeholder="(xx) 9 0000-0000 ">
          </div>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>

            
        
            <div class="text-center">
                <button type="submit" id="btn-avancar" class="btn btn-primary" onclick="proximaPagina()">Próximo Passo</button>

            </div>
        </div>
      </form>

      
      
      
      <script src="script.js"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.min.js"></script>



</body>
</html>
