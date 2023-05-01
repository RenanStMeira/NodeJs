// incluindo uma biblioteca do HTTP
import * as http from 'http';
import * as url from 'url';
 // Incluido biblioteca de URL
import queryString from 'query-string'; // incluindo pacote



// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3030;


// Implementação da regra de megocio
const server = http.createServer((req, res) => {

    // Pegar a pergunta na URL
    const params = queryString.parse(url.parse(req.url, true).search);

    // Verificar a pergunta e escolher a resposta
    let resposta;

    if(params.pergunta == 'melhor filme de ação' ) {
      resposta = 'Top Gun';
    } 

    else if(params.pergunta == 'melhor tecnologia backend' ) {
      resposta = 'nodejs';
    }  
    
    else {
      resposta = 'Nao sei';
    }


    // retornasr a resposta


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});


    // Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});