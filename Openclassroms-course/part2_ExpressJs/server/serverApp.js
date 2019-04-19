//~~~~~~Functions~~~~~~//
function cl(message){  //console.log plus rapide
    console.log(message);
}

//~~~~~~Modules~~~~~~~//
var app =require('express')();
//~~~~~~Variables~~~~~~~//

//~~~~~~Listeners~~~~~~//


//~~~~~~URLrouting~~~~~~//
app.get('/', function(req, res) {  //Gestion des routes dans l'url
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
})
.get('/sous-sol', function(req,res){ //de manière chainée reviens a apt.get();
    res.setHeader('Content-Type', 'text/plain');
    res.send('Ou il y a tes enfants lol');
})
.get('/etage/:etageNum/chambre', function(req, res) {  //Gère de maniere dynamique les url avec le param :numEtage puis req.params.numEtage    
    
   if(isNaN(req.params.etageNum)){  
   res.status(404)
   res.end('<h1>404</h1> <p>Page introuvable :(<p>'); //Controle d'erreur de l'url du pauvre
    }
   else{  
        res.render('chambre.ejs', {etage: req.params.etageNum}); //Utilisation du render ejs et envoie de paramètres au render
    }     
})
.get('/test/:param',function(req,res){

    var tab=['a','b','c','d'];
    res.render('counter.ejs',{counter: req.params.param, tab: tab });          //transfert de deux variables a la page                             
})
.use(function(req, res, next){ //Pour faire la gestion du 404
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('<h1>404</h1> <p>Page introuvable !<p>');
});

 
//~~~~~~Main~~~~~~//

app.listen(8080);

cl("\n");


/*IF ternaire 
(!isNaN(req.params.etageNum)? cl("yes") : cl("nein") ); //si c'est un nombre yes sinon nein
*/
