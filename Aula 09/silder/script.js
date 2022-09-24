/* Slider com JavaScript (ES6) */

var imgs = [] // Vetor a onde as imgs serão a locadas, em cada posição do vetor será carregada uma new image
var slider = document.getElementById("dvslider") // var para receber o slider atráves do querySelector
var imgAtual; // Guarda a img atual
var maxImg // Guarda o n total de imgs
var tpm

function preCarregamento(){
    let s = 1 // Administra o nome e posição do array da img
    for(let i = 0; i < 5; i++){ // Com o for vamos percorrer todas as posições do array e adicionar as imgs, enquanto o indice for menor do que 5 o indice será incrementado em 1
        // Criação de uma nova IMG
         imgs[i] = new Image() // Em cada posião será add uma nova img
         imgs[i].src = "imgs/s" +s+ ".jpg" // Séra necessário passar um URL com a localização das imgs, nesse caso o nome das imgs começa com S e elas são jpg por isso ficou do seguinte formato <----
         s++
    }
}

/* O for interage com o array de uma maneira bem simples, toda vez que passamos o i para dentro do array estamos adicioando um número dentro dele
   se o i for menor que 5, o i será incrementado com o ++ até chegar ao valor de teste que no caso é o 5.
   
   Se você digitar no console o seguinte comando irá ver que o array receberá 5 'olá tudo bem?'
   
   var array = []

   for(let i = 0; i < 5; i++){
    array[i] = 'Olá tudo bem?'

}


/* Para funcionar o script é importante deixar a letra s, todas as imgs na pasta iniciam com s */


// Função que adiciona a img no background da DIV

function carregarImg(img){ // o Paramentro será a img que eu quero carregar
    slider.style.backgroundImage ="url('"+imgs[img].src+"')" //  o style.backgroundImage recebe a url com a img que queremos redenrizar 
}



function trocar(){
    imgAtual++ // Séra incremetado em 1 para carregar a próxima img
    if(imgAtual>maxImg){ // Se img atual for menor que maximo de imgs
        imgAtual=0 // ela será resetada 
    }
    carregarImg(imgAtual)
}


// Parte central do slider

window.addEventListener("load", ()=>{
    preCarregamento()
    imgAtual = 0
    maxImg = imgs.length
    slider
    carregarImg(imgAtual)
    tmp = setInterval(trocar, 3000)

})
 /* Dentro do AddEvent foi adicionada uma arrow function, essa função será executada quando o a página for carregada.
    1 - Primeiro será realizado o pre carregamento das imgs
    2 - Verifica a posição do array 
    3 - verifica o tamanho do array
    4 - pega o ID do slider
    5 - carrega a img atual na div
    6 - controla o tempo de troca que no caso é 3segs
*/