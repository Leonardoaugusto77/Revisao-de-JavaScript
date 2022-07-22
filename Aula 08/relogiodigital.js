function relogio(){
    let date = new Date() // Instancia
    let horas = date.getHours()
    let min = date.getMinutes()
    let segs = date.getSeconds()

    let hor = horas + ":" + min + ":" + segs

    if(horas < 10){
        horas = "0" + horas
    } if (min < 10){
        min = "0" + min
    } if (segs < 10){
        segs = "0" + segs
    }

    // Se hor, min, e segs for menor que 10 ele irá receber o 0 e depois os valores de cada get, assim os horarios sempre vão ser formatados com o horário cheio por ex 09:05:00 


    document.getElementById("rel").value = hor // Vai subistituir o value do input pelo contéudo da váriavel HOR

}


setInterval(relogio, 1000)