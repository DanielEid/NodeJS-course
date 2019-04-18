//~~~~~~Functions~~~~~~//

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
    console.log("Server closed \n\n");
}

let closeGameCallback = function(message){
    console.log(message );
}

//~~~~~~Modules~~~~~~~//
var http = require('http');  
var EventEmitter = require('events').EventEmitter;  //crée un objet recuperant la librairie pour crée des events
let test = require('../myModules/test');  //module custom / si pas d'indication du path alors module dans node_modules
var markdown = require('markdown').markdown; // module télécharger avec npm 


//~~~~~~Variables~~~~~~~//
let server = http.createServer(); //creation du serveur
let jeu = new EventEmitter();  //creation de l'event custom
let playerFactory = new EventEmitter();


//~~~~~~Listeners~~~~~~//

server.on('socket',function(){ console.log("\n\nLe serveur a demarré"); }); //écoute de l'event et log
server.on('request',startServerCallback); //lorsque le serveur est demander je crée le serveur en callback (peut etre anonyme)
server.on('close',closeServerCallback); //Appel une fonction lorsque l'évenement server close est executé

jeu.on("gameClose",function(message){closeGameCallback(message)}); //creation callback avec appel de fonction avec arguments (encaptulation de la fonction avec la fonction anonyme => anonyme pour le coup c'est mieux)
jeu.on("gameStart",function(message){   //Creation du callback pour l'event custom avec fonction anonyme
    console.log("Message event: " +message);
   })

playerFactory.on("player()",function(name,age,pv){
    console.log("Player: "+name+age+pv);
    });

//~~~~~~Main~~~~~~//

console.log("\n\n"+"~~~~~~~~~~~~~~~~~~~~~~"+"\n"+"Le script serveur se lance"+"\n");

server.listen(8080); //Le serveur écoute sur le port 8080

jeu.emit("gameStart","Le jeu commence");   //send l'event custom
jeu.emit("gameClose","Le jeu ce termine");   //send l'event custom
playerFactory.emit("player()","Daniel",22,100);


test.direOkay();  //appel fonction static du module custom

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));  // appel module et fonction du module voir doc // Doc des modules sur https://www.npmjs.com/


console.log("\n" + "~~~~~~~~~~~~~~~~~~~~~~~" );
//server.close();




