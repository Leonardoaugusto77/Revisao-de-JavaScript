// O que é setTimeout?


function mudaCor(){
    var obj = document.getElementById("div1")
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    obj.style.backgroundColor = "rgb("+r+","+g+","+b+")"
}


// var tmp = setTimeout(mudaCor,1000)

var tmp;

function inicar(){
    tmp = setInterval(mudaCor,1000)
}

function parar(){
    clearInterval(tmp)
}

document.getElementById("bt1").addEventListener("click", inicar)
document.getElementById("bt2").addEventListener("click", parar)























// O que é setInterval?