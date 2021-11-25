$(document).ready(main);

var contador = 1;

function main (){
    $('.menu-responsive').click(function(){
        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else{
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });

    $('section').click(function(){
        if(contador == 1){
            $('nav').animate({
                left: '-100%'
            });
            contador = 0;
        } else{
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });

    // mostrar y oculttar submenu 
    $('.menu__submenu').click(function (){
        $(this).children('.menu__children').slideToggle();
    });
    
}


