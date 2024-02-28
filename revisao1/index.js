/*
 *Servidor HTTP e API com o express 
 */
//importar o módulo express - antes precisa instalar!
// npm i express

//A ideia agora, é trabalhar com aplicação fullstack


//MVC => Padrão de projeto que separa as responsabilidades em 
//Model VIEW e Controllers

const express = require("express");
const app = express();
//pegando um mod externo! - uma view
const indexView = require("./views/indexView")
//Deixar uma pasta pública para ser acessada externamente
app.use(express.static("public"))
//Aqui vao as rotas (endpoints)
app.get('/student', (req, res, next) => {
    //responder com um html
    res.send(indexView())
})

app.listen(3001, () => {
    console.log("Servidor no ar com o Express...")
})

/**
 * crie 3 rotas:
 * /produtos
 * /funcionarios
 * /admin
 * 
 * Cada rota, tem que mostrar uma tela (view) diferente!
 */