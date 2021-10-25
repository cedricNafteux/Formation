//variable global
var compteur = 0;
var jsInpEss = document.getElementById("idInpEss");
var jsInpMes = document.getElementById("idInpMes");
var jsInpPro = document.getElementById("idInpPro");
var jsInpRep = document.getElementById("idInpRep");
var nombreMystere;

//gestion bouttons
    var jsBoutNewGame = document.getElementById("idNewGame");
        jsBoutNewGame.onclick = funNewGame;
    var jsBoutSoluce = document.getElementById("idSoluce");
        jsBoutSoluce.onclick = funSoluce;
        jsBoutSoluce.disabled = true;
    var jsBoutPropo = document.getElementById("idPropo");
        jsBoutPropo.onclick = funPropo;
        jsBoutPropo.disabled = true;

//fonction newGame
    function funNewGame (){
        jsInpEss.value = compteur; //initialisation
        jsInpPro.value = '';
        jsInpRep.value = '';
            jsBoutNewGame.disabled = true; //modification bouttons
            jsBoutSoluce.disabled = false;
            jsBoutPropo.disabled = false;
        nombreMystere = Math.random() * (100); //generation nombre mystere
        nombreMystere = parseInt(nombreMystere);
        jsInpMes.value = 'c\'est parti!!!';
        alert(nombreMystere);
    }

//fonction soluce
    function funSoluce (){
        jsInpMes.value =( 'PERDU. La bonne réponse était : '+nombreMystere); //message de fin de jeu
            jsBoutNewGame.disabled = false; //modification bouttons
            jsBoutSoluce.disabled = true;
            jsBoutPropo.disabled = true;
        jsInpEss.value = '';//vide casse essai
    }

//fonction proposer
    function funPropo (){
        jsInpRep.value = jsInpRep.value+" - "+jsInpPro.value;
        if (jsInpPro.value > nombreMystere){
            jsInpMes.value = 'trop grand';
            compteur++;
            jsInpPro.value = '';
        }else if(jsInpPro.value < nombreMystere){
            jsInpMes.value = 'trop petit';
            compteur++;
            jsInpPro.value = '';
        } else{
            alert("!!!!!GAGNE!!!!!");
        }
        jsInpEss.value = compteur;
        if (compteur>6){
        jsBoutPropo.disabled = true;
        alert("!!!PERDU!!!");
        }
    }
