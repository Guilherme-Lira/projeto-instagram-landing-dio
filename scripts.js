const botao = document.getElementsByClassName("botao");

const field = document.getElementsByTagName("input");


field[0,1].addEventListener ("change", function buttonColor() {
    if (field[0,1].value !== ""){(botao[0]).style.background = 'rgb(19,97,150)';}   
    else {
    botao[0].style.background = 'rgb(158,216,255)';}
});
