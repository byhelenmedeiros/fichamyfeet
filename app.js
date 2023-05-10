const express = require('express');
const app = express();
const path = require('path');

// Configurar o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para renderizar a página do formulário
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para lidar com o envio do formulário
app.post('/submit', (req, res) => {
  // Lógica para processar os dados do formulário
  // ...

  // Responder com uma mensagem de sucesso
  res.send('Formulário enviado com sucesso!');
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
