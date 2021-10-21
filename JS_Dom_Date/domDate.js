//declaration variables
var tabMois = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
const anneeActuel = 2021;

//gestion bouton
let boutA = document.querySelector('button');
boutA.addEventListener('click', calculDN)

//creation menu deroulant annee
for(let i=1900;i<=anneeActuel;i++){
    let a = document.createElement("option");
    a.id = "a"+i;
    a.textContent = i;
    document.getElementById('idAnnee').appendChild(a);
}
//creation menu deroulant mois
for(let i=0;i<tabMois.length;i++){
    let b = document.createElement("option");
    b.id = tabMois[i];
    b.textContent = tabMois[i];
    document.getElementById('idMois').appendChild(b);
}
//creation menu deroulant jour
for(let i=0;i<=31;i++){
    let c = document.createElement("option");
    c.id = "c"+i;
    c.textContent = i+1;
    document.getElementById('idJour').appendChild(c);
}
//fonction de calcul des durées
function calculDN(){
//gestion annee
   let annee1 = document.getElementById('idAnnee');
        let totalAnnee = annee1.value;
//gestion mois
   let mois1 = document.getElementById('idMois');
        let totalMois = 0;
        for(let j=0;j<tabMois.length;j++){
            if(mois1.value == tabMois[j]){
                var moisNais = j+1;}
        }
// tri durée des mois
        if(moisNais == 2){
            totalMois = 28 }
        else{
            if(moisNais == 4 || moisNais == 6 ||moisNais == 9 ||moisNais == 11 ){
                totalMois = 30}
            else {
                totalMois = 31 }
        }
   let jour1 = document.getElementById('idJour');
   let jour2 = document.getElementById('uJour');
   let mois2 = document.getElementById('uMois');
   let annee2 = document.getElementById('uAnnee');
    let resultat=0;
//calcul durée total en jour
   let resultatPro = (anneeActuel-totalAnnee)*365.24219 + totalMois + jour1.value*1;
//renvoie en jour/mois/annees
   if(jour2.checked == true){
        alert(resultatPro+"jour");}
   if(mois2.checked == true){
        resultat = resultatPro/30;
        alert(resultat+"mois");
    }if(annee2.checked == true){
        resultat = resultatPro/365.24219;
        alert(resultat+"annees"); }

}
