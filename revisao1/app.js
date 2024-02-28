//Criar um servidor http - Sem usar o express
//1.carregar o http
const http = require("http");

//2. Criar o servidor
const server = http.createServer((req, res) => {
    //req => as requisições recebidas do mundo lá fora...
    console.log(req.url);

    //Eu enquanto dev, vou criar os meus endpoints!
    // /save /students  /delete

    if (req.url === '/save') {
        console.log(req.method);
        res.end("Salvando usuários....")
    }else if(req.url === '/students'){
        res.end("Lista de todos users...")
    }else if(req.url === '/delete'){
        res.end("Apagando user chato...")
    } else {
        res.end("Não conheço essa rota!!")
    }

})
//3. Subir o servidor
server.listen(3000, () => {
    console.log("Server ok")
});
