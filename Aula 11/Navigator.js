/* O que é Navigator -> Ele retorna informações do navegador


*/

let painel 

const localizar = (pos) => {
    let c = pos.coords
    painel.innerHTML += 'Lat: ' + c.latiude + ' - Lon ' + c.longitude
}

const verificar = () => {
    painel = document.getElementById('painel')
    // painel.innerHTML = 'Nome do Browser ' + navigator.appName // Retorna o nome do Browser
    // painel.innerHTML += 'Nome do Browser ' + navigator.appVersion // Retorna a versão do Browser
    // painel.innerHTML += 'Cookies ' + navigator.cookieEnabled // Retorna se o Browser está com os cookies habilitados ou não
    // navigator.geolocation.getCurrentPosition(localizar) // Retorna a localização do Browser
    //  painel.innerHTML += 'Idioma: ' + navigator.language + '<hr>' // Retorna o idioma do Browser
    painel.innerHTML += 'Status ' + navigator.onLine
    painel.innerHTML += 'S.O.: ' + navigator.platform //
    painel.innerHTML += 'Engine ' + navigator.product

}

window.addEventListener('load', verificar)