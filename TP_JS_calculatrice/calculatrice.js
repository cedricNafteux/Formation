//variables global
var jsInput = document.getElementById("idInput");
var chaineTmp1 ='';
var operateur;

//gestion bouttons
document.getElementById("idBoutC").onclick = funClear;
var jsBout0 = document.getElementById("idBout0");
jsBout0.onclick = funChaine
var jsBout1 = document.getElementById("idBout1");
jsBout1.onclick = funChaine
var jsBout2 =document.getElementById("idBout2");
jsBout2.onclick = funChaine
var jsBout3 =document.getElementById("idBout3");
jsBout3.onclick = funChaine
var jsBout4 =document.getElementById("idBout4");
jsBout4.onclick = funChaine
var jsBout5 =document.getElementById("idBout5");
jsBout5.onclick = funChaine
var jsBout6 =document.getElementById("idBout6");
jsBout6.onclick = funChaine
var jsBout7 =document.getElementById("idBout7");
jsBout7.onclick = funChaine
var jsBout8 =document.getElementById("idBout8");
jsBout8.onclick = funChaine
var jsBout9 =document.getElementById("idBout9");
jsBout9.onclick = funChaine
var jsBoutP = document.getElementById("idBoutP");
jsBoutP.onclick = funOpera;
var jsBoutM = document.getElementById("idBoutM");
jsBoutM.onclick = funOpera;
var jsBoutX = document.getElementById("idBoutX");
jsBoutX.onclick = funOpera;
var jsBoutD = document.getElementById("idBoutD");
jsBoutD.onclick = funOpera;
var jsBoutE = document.getElementById("idBoutE");
jsBoutE.onclick = funEgal;

//fonction recuperation operateur
function funOpera (oper){
    if (chaineTmp1 != null){
        chaineTmp1 = jsInput.value;
        oper = this.value;
        operateur = oper
        jsInput.value = '';
    }
}

//fonction concatenation de chaine
function funChaine(bout){
    bout = this.value
    jsInput.value = jsInput.value + bout;
}

//fonction calcul
function funEgal(){
    let reset = jsInput.value;
    let chaine1 = parseInt(chaineTmp1);
    let chaine2 = parseInt(jsInput.value);
    switch (operateur){
        case '1' :
            jsInput.value = chaine1 + chaine2;
            break;
        case '2' :
            jsInput.value = chaine1 - chaine2;
            break;
        case '3' :
            jsInput.value = chaine1 * chaine2;
            break;
        case '4' :
            jsInput.value = chaine1 / chaine2;
            break;
    }

//fonction clear
}
function funClear(){
    jsInput.value = '';
}
