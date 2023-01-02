// createAttribute -> Serve para controlar os atributos das tags por exemplo cria um atributo como estilos, classes e afins
// setAttributeNode -> adicona o novo atributo que foi criado
// setAttributeNode -> Remove o atributo especificado 

function inica(){
    document.getElementById('btndestaque').addEventListener('click', ()=>{
        let num = document.getElementById('fnum').value
        let p = document.getElementsByTagName('p')

        for(let i = 0; i < p.length; i++){
            p[i].removeAttribute('style')
        }

        let at = document.createAttribute('style')
        at.value = 'color: red;'
        p[num].setAttributeNode(at)
    })
}

window.addEventListener('load', inica)