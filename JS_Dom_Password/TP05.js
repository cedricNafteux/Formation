let isPress = false;

function changeOeil1(abc){
    if(isPress){
        abc.src="images/oeil_ferme.jpg";
        idInput1.type = 'password';
    }else{
        abc.src="images/oeil_ouvert.jpg";
        idInput1.type = 'text';
    }
    isPress = !isPress; 
}

let isPress2 = false
function changeOeil2(abc){
    if(isPress2){
        abc.src="images/oeil_ferme.jpg";
        idInput2.type = 'password';
    }else{
        abc.src="images/oeil_ouvert.jpg";
        idInput2.type = 'text';
    }
    isPress2 = !isPress2 ;
}


function control (btn){
    let inp1 = document.getElementById('idInput1');
    let inp2 = document.getElementById('idInput2');

    if(inp1.value == inp2.value && inp1.value !== ''){
        alert("ok");
    }
    else{
        alert("correspond pas ou vide");
    }
}