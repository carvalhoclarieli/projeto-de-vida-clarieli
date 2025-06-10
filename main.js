const botoes = document.querySelector(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i=0; i<botoes.length; i++){
    botoes[i].onclik = function (){

        for(let j=0; j< botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
        
    }
}