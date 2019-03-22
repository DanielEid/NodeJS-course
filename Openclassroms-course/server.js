//~~~~~~Functions~~~~~~//

/**
 * @function startServerCallback -on Resquest
 * @param req = info demandée par le client
 * @param res = re-envoyée au client
 * @info Pour avoir du bon code html et des éléments deja realisés voir des templates. 
 */

let startServerCallback = function(req, res){  
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

let closeServerCallback= function(){
    console.log("Second message: Server closed");
}

//~~~~~~Parameters~~~~~~~//
var http = require('http');   //crée un objet http nécésaire pour creer le serveur
var EventEmitter = require('events').EventEmitter;  //crée un objet recuperant la librairie pour crée des events


//~~~~~~Listeners~~~~~~//

/*
var server = http.createServer(innerServer); //crée le serveur en appelant la fonction (peut être anonyme)
OU
*/
var server = http.createServer(); //creation du serveur
server.on('request',startServerCallback); //lorsque le serveur est demander je crée le serveur en callback (peut etre anonyme)


server.on('close',function(){
console.log("Server closed")
});
// OU
server.on('close',closeServerCallback); //Appel une fonction lorsque l'évenement server close est executé

jeu.on("gameStart",function(message){   //Creation du callback pour l'event custom 
    console.log("Message event: " +message);
   })



//~~~~~~Main~~~~~~//

server.listen(8080); //Le serveur écoute sur le port 8080


let jeu = new EventEmitter();  //creation de l'event custom

jeu.emit("gameStart","Le jeu commence");   //send l'event custom


server.close();