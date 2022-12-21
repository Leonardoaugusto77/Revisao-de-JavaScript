/* Location -> Contém informações da URL, podemos regastar e setar as informações!  */


let aux = location.hash


// document.write(`${aux}`) // Retorna os valores que foram passados como paramentro no Href

let dados = aux.split("#")

let h = location.hostname // Retorna a URL da página acessado (só funciona se estiver online)

// let hr = location.href // Devolve a URL da página atual

// let hr = location.href="https://www.youtube.com/" // Set a URL e manda você para o link desejado

let origin = location.origin // Traz informações como protocolo, hostname e numero da porta

let p = location.pathname // Retorna o caminho apos o protocolo e hostname

let porta = location.port // Retorna a porta

let protocolo = location.protocol // Retorna o protocolo desejado

let search = location.search // Semelhante ao hash porém ele retorna atráves dos ?

let ass = location.assign('Screen.html') // Recarrega a url que for passada como paramentro 

let rep = location.replace('') // Remove a url do history quando é executado (Diferente do assing) // não permite voltar

let rel = location.reload // Recarrega a pagina



document.write(dados[1])

document.write('<br>')

document.write(dados[h])

document.write('<br>')

document.write(hr)

document.write(protocolo)



