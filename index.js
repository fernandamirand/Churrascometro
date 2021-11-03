// Carne - 400gr por pessoa + de 6horas - 650
// Bebidas - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById ("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qdtTotalBebidas = bebidasPP(duracao) * adultos;
    let qdtTotalAgua = aguaPP(duracao) * adultos + (aguaPP(duracao) /2 * criancas);

    

    resultado.innerHTML = 
    `<div class="div1"> 
    <p class="p1">Você vai precisar de:<br><br><img src="./images/iconn1.png" width="50px" height="50px">  ${qdtTotalCarne/1000} kg de carne</p>
    </div>`;
     
    resultado.innerHTML += 
    `<div class="div2">
    <p class="p2"><img src="./images/garrafa2.png" width="50px" height="50px"> ${Math.ceil(qdtTotalBebidas/1000)} garrafas de bebida</p>;
    </div>`;

    resultado.innerHTML += 
    `<div class="div3">
    <p class="p3"><img src="./images/garrafa1.png" width="50px" height="50px"> ${Math.ceil(qdtTotalAgua/1000)} garrafas de refrigerante/água</p>;
    </div>`;
}
function carnePP(duracao){
    if(duracao >= 6) {
        return 650;
    } else{
        return 400;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6) {
        return 2000;
    } else{
        return 1200;
    }
}

function aguaPP(duracao){
    if(duracao >= 6) {
        return 1500;
    } else{
        return 1000;
    }
}
