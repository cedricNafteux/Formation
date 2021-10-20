/*function press(baliseImg){
    baliseImg.src="images/shadow-proof.jpg";
   let n = document.getElementById('idDivPreuve')
   n.style.display = 'block'
}
function depress(baliseImg){
    baliseImg.src="images/shadow-illusion.jpg";
    let n = document.getElementById('idDivPreuve')
    n.style.display = 'none'
}*/


let isPress = false;

function changeImg (baliseImg){

    if(isPress){
        baliseImg.src="images/shadow-illusion.jpg";
        let n = document.getElementById('idDivPreuve');
        n.style.display = 'none';
    }else{
        baliseImg.src="images/shadow-proof.jpg";
        let n = document.getElementById('idDivPreuve');
        n.style.display = 'block';
    }
    isPress = !isPress
} 
