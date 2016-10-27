var express = require('express');

//carregando o express load para evitar a necessidade do require o tempo todo
var load = require('express-load');

//body parser

var bodyParser = require('body-parser');

//A responsabilidade do modulo sera retornar uma instancia configurada do Express!

module.exports = function(){


    var app = express();

    //Fazer com que a porta 3000 seja ouvida
    app.set('port', 3000);

    //Fazer com que os arquivos da pasta public sejam acessiveis
    //express.static eh um middleware
    //O ./ represneta a pasta onde o script foi executado pelo comando node
    app.use(express.static('./public'));

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    //Defino a engine
    app.set('view engine', 'ejs');
    //Defino o diretorio
    app.set('views', './app/views');


    //cwd modifica o diretorio padrao da raiz para app
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;

};
