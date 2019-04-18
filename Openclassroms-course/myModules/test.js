var direBonjour = function() {
    console.log('Bonjour !');
}

var direByeBye = function() {
    console.log('Bye bye !');
}

var okay = function(){  //privé car pas export
    console.log('Okay !');
}

exports.direOkay = function(){ //sans variables intermédaires
    okay();  //appel fonction privée
}

exports.direBonjour = direBonjour; // avec variables intermédaires
exports.direByeBye = direByeBye;