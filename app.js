// incluindo uma biblioteca do HTTP
import * as http from 'http';
import * as url from 'url';
import queryString from 'query-string'; // incluindo pacote
import * as fs from 'fs';

// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3030;


// Implementação da regra de megocio
const server = http.createServer((req, res) => {

  var resposta;
  const urlParse = url.parse(req.url, true);
  // Receber os dados do usuario
  const params = queryString.parse(urlParse.search);


  // Criar um usuario -- Atualizar
  if(urlParse.pathname == '/criar-usuario'){

        // Salvar as informações (pequisar na biblioteca npmjs *file* ou fs)
                  //Pasta de destino  //Id do usuario                      //Function de calback
        fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
          if (err) throw err; // Retorno da resposta 
          console.log('Saved!');

          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(resposta);
        });
        
        resposta = 'Usuario criado com sucesso';

  }

  
  // Selecionar um usuario    
    else if(urlParse.pathname == '//selecionar-usuario') {
      fs.readFile('users/' + params.id + '.txt', function(err, data) {
        resposta = data;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
       });
    }   

  // Remover o usuario
  else if(urlParse.pathname == '//remover-usuario') {
    fs.unlink('users/' + params.id + '.txt', function (err) {
      console.log('deletado')

      res.statusCode = 204;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);

    });

  }
});


    // Execução
  server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//http://localhost:3030/criar-usuario?nome=Renan&idade=31&id=1
//http://localhost:3030/selecionar-usuario?id=2
//http://localhost:3030/remover-usuario?id=2