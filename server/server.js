/*
*   POUR LANCER LE SERVEUR
1 - Ouvrir un terminal à la racine du projet
2 - Taper la commande 'grunt build'
3 - S'assurer que le serveur s'est bien lancé sans erreur
/!\ A chaque fois qu'une modification est exécutée sur server.js, il faut relancer le serveur dans le terminal !

*   POUR TESTER LE PROJET
1 - Le tester au port indiqué par le serveur ('http://localhost:3000')

 */

//////////
// Initialisations
//////////

// Get the packages we need
/*
jQuery = require('jQuery');
var bootstrap = require('bootstrap');
var foundation = require('foundation');
*/
var express = require('express');

var app = module.exports = express();
var port = process.env.PORT || 8080;

// Get static files
app.use(express.static('static'));
/*
// RequireJS handler
var requirejs = require('requirejs');
var Backbone = requirejs('backbone');
app.use(requirejs);
app.use(Backbone);
*/

//var route = module.require('../static/route.js');

// Start the server
app.listen(port);
console.log('Serveur lancé à l\'adresse http://localhost:' + port);

//////////
// ASCII art
//////////

// Chat
//console.log("           |`-.._____..-'|\n           :  > .  ,  <  :\n           `./ __`' __ \\,'\n            | (|_) (|_) |\n            ; _  .  __  :\n            `.,' - `-. ,'\n              `, `_  .'\n              /       \\ \n             /         :\n            :          |_\n           ,|  .    .  | \\ \n          : :   \\   |  |  :\n          |  \\   :`-;  ;  |\n          :   :  | /  /   ;\n           :-.'  ;'  / _,'`------.\n           `'`''-`'''-'-''--.---  )\n");

// Totoro
console.log("         ,--\"\"\"\",--.__,---[],-------._         \n       ,\"   __,'            \\         \\--\"\"\"\"\"\"==;-\n     ,\" _,-\"  \"/---.___     \\       ___\\   ,-'',\"\n    /,-'      / ;. ,.--'-.__\\  _,-\"\" ,| `,'   /\n   /``\"\"\"\"-._/,-|:\\       []\\,' ```-/:;-. `. /\n             `  ;:::      ||       /:,;  `-.\\\n                =.,'__,---||-.____',.=\n                =(:\\_     ||__    ):)=\n               ,\"::::`----||::`--':::\"._\n             ,':::::::::::||::::::::::::'.\n    .__     ;:::.-.:::::__||___:::::.-.:::\\     __,\n       \"\"\"-;:::( O )::::>_|| _<::::( O )::::-\"\"\"\n   =======;:::::`-`:::::::||':::::::`-`:::::\\=======\n    ,--\"\";:::_____________||______________::::\"\"----.          , ,\n         ; ::`._(    |    |||     |   )_,'::::\\_,,,,,,,,,,____/,'_,\n       ,;    :::`--._|____[]|_____|_.-'::::::::::::::::::::::::);_\n      ;/ /      :::::::::,||,:::::::::::::::::::::::::::::::::::/\n     /; ``''''----------/,'/,__,,,,,____:::::::::::::::::::::,\"\n     ;/                :);/|_;| ,--.. . ```-.:::::::::::::_,\"\n    /;                :::):__,'//\"\"\\\\. ,--.. \\:::,:::::_,\"\n   ;/              :::::/ . . . . . . //\"\"\\\\. \\::\":__,\"\n   ;/          :::::::,' . . . . . . . . . . .:`::\\\n   ';      :::::::__,'. ,--.. . .,--. . . . . .:`::`\n   ';   __,..--'''-. . //\"\"\\\\. .//\"\"\\\\ . ,--.. :`:::`\n   ;    /  \\\\ .//\"\"\\\\ . . . . . . . . . //\"\"\\\\. :`::`\n   ;   /       . . . . . . . . . . . . . . . . .:`::`\n   ;   (          . . . . . . . . . . . . . . . ;:::`\n   ,:  ;,            . . . . . . . . . . . . . ;':::`\n   ,:  ;,             . . . . . . . . . . . . .;`:::\n   ,:   ;,             . . . . . . . . . . . . ;`::;`\n    ,:  ;             . . . . . . . . . . . . ;':::;`\n     :   ;             . . . . . . . . . . . ,':::;\n      :   '.          . . . . . . . .. . . .,':::;`\n       :    `.       . . . . . . . . . . . ;::::;`\n        '.    `-.   . . . . . . . . . . ,-'::::;\n          `:_    ``--..___________..--'':::::;'`\n             `._::,.:,.:,:_ctr_:,:,.::,.:_;'`\n________________`\"\\/\"\\/\\/'\"\"\"\"`\\/\"\\/\"\"\\/\"____________________________\n    ");

//////////
// Requêtes
//////////

app.get('/', function(req, res){
    var path = require('path');
    res.sendFile(path.resolve('index.html'));
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});