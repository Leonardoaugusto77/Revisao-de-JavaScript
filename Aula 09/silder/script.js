/* Slider com JavaScript (ES6) */

/*
    Pontos importantes na criação

    Criar um Pre - Carregamento: Existem algumas imgs que são mais pesadas que outras por isso
    a criação do pre carregamento é uma otima ideia para melhorar nosso SEO

*/


var imgs = [] // Vetor a onde as imgs serão a locadas, em cada posição do vetor será carregada uma new image
var slider = document.getElementById("dvslider") // var para receber o slider atráves do querySelector
var imgAtual;
var maxImg
var tpm

function preCarregamento(){
    let s = 1 // Administra o nome da img
    for(let i = 0; i < 5; i++){ // Com o for vamos percorrer todas as posições do array e adicionar as imgs, enquanto o indice for menor do que 5 o indice será incrementado em 1
        // Criação de uma nova IMG
         imgs[i] = new Image() // Em cada posião será add uma nova img
         imgs[i].src = "imgs/s" +s+ ".jpg" // Séra necessário passar um URL com a localização das imgs, nesse caso o nome das imgs começa com S e elas são jpg por isso ficou do seguinte formato <----
         s++
    }
}


// Função que adiciona a img no background da DIV


function carregarImg(img){ // o Paramentro será a img que eu quero carregar
    slider.style.backgroundImage ="url('"+imgs[img].src+"')" //  o style.backgroundImage recebe a url com a img que queremos redenrizar 
}

function inicia(){
    preCarregamento()
    imgAtual = 0
    maxImg = imgs.length
    slider
    carregarImg(imgAtual)
}

function trocar(){
    imgAtual++ // Séra incremetado em 1 para carregar a próxima img
    if(imgAtual>maxImg){
        imgAtual=0
    }
    carregarImg(imgAtual)
}


window.addEventListener("load", ()=>{
    preCarregamento()
    imgAtual = 0
    maxImg = imgs.length
    slider
    carregarImg(imgAtual)
    tmp = setInterval(trocar, 3000)

})