//Declarar dependencias

//Modulo responsavel para subir o servidor
var http = require('http');
//Modulo criado para auxiliar no processo - request listener
var app = require('./config/express')();

//Instanciando o servidor
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});
