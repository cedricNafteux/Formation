// variables globales
let nbrClick = 0;
let nbrCoup = 0;
let nbrPaire = 0;
let tabSourceImgs = [
    "images/paires01/1.jpg",
    "images/paires01/2.jpg",
    "images/paires01/3.jpg",
    "images/paires01/4.jpg",
    "images/paires01/5.jpg",
    "images/paires01/6.jpg",
    "images/paires01/7.jpg",
    "images/paires01/8.jpg",
    "images/paires01/1.jpg",
    "images/paires01/2.jpg",
    "images/paires01/3.jpg",
    "images/paires01/4.jpg" ,
    "images/paires01/5.jpg",
    "images/paires01/6.jpg",
    "images/paires01/7.jpg",
    "images/paires01/8.jpg",];

    //fonctions
function creerImage (){
    let $container = $('#container');
    let ul = '<ul>';
    for(let index = 0; index < tabSourceImgs.length;index++){
        ul += '<li><img src="' + tabSourceImgs[index] + '"></li>';
    };
    ul += '</ul>';
    $container.html(ul);
    $('img').hide();
}

function clickImage(evt){
    let $img = $(evt.currentTarget).children().first();
    if(nbrClick < 2 && !$img.hasClass('retournee')) {
        $img.show();
        $img.addClass('retournee');
        nbrClick++;
            if(nbrClick == 2){
                verifImage();
            }
        }
    }

function verifImage(){
    let imgs = $('img.retournee');
    console.log(imgs[0].src);
    if(imgs[0].src == imgs[1].src){
        imgs.removeAttr('class');
        imgs.parent().off('click');
        nbrClick = 0;
        nbrPaire++;
        $('#idNbrPaire').val(nbrPaire);
    }else{
        imgs.removeAttr('class');
        setTimeout(function(){
            imgs.hide();
            nbrClick = 0;
        },1000);
    }
    nbrCoup++;
$('#idNbrEssai').val(nbrCoup);
}






function brassage(){
    for (let index = 0; index < tabSourceImgs.length;index++){
        let j = Math.floor(Math.random()*15);
        console.log(j);
        let temp = tabSourceImgs[index];
        tabSourceImgs[index] = tabSourceImgs[j];
        tabSourceImgs[j] = temp;
    }
}
function rejouer(){
    nbrClick = 0;
    nbrCoup = 0;
    $('#idNbrEssai').val(nbrCoup);
    nbrPaire = 0;
    $('#idNbrPaire').val(nbrPaire);
    brassage();
    creerImage();
    $('li').click(function (e){
        clickImage(e)
    });
}

$(document).ready(function(){
    brassage();
    creerImage();
    $('li').click(function (e){
        clickImage(e)
    });

    $('#idRejouer').click(function(){
        rejouer();
    });
});
