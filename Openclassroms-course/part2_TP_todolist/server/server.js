//~~~~~~Functions~~~~~~//
function c(message){  //console.log plus rapide
    console.log(message);
}

//~~~~~~Modules~~~~~~~//
var app =require('express')();
//~~~~~~Variables~~~~~~~//

//~~~~~~Listeners~~~~~~//


//~~~~~~URLrouting~~~~~~//
app.get('/', function(req, res) { 
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
})

.get('/todolist', function(req, res) {    
    
     
        res.render('todolist.ejs'); 
      
})
.use(function(req, res, next){ 
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('<h1>404</h1> <p>Page introuvable !<p>');
});

 
//~~~~~~Main~~~~~~//

app.listen(8080);

cl("\n");

