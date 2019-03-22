//Functions

/**
 * @function innerServer
 * @param req = info demandée par le client
 * @param res = re-envoyée au client
 * @info Pour avoir du bon code html et des éléments deja realisés voir des templates. 
 */

let innerServer = function(req, res){  
    res.writeHead(200, {"Content-Type": "text/html"});  //indique code de retour + type MIME

    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Node.js Course</title>'+
'    </head>'+ 
'    <body>'+
'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
'    </body>'+
'</html>');

    res.end();  //doit toujour entre appeler en dernier
}



//Parameters
var http = require('http');   //crée un objet http nécésaire pour creer le serveur

//Main

var server = http.createServer(innerServer); //crée le serveur en appelant la fonction (peut être anonyme)
server.listen(8080); //Le serveur écoute sur le port 8080