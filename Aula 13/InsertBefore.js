// insertBefore -- Adicona um elemento especificado antes 


let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')
let input = document.querySelector('#add')

btn.addEventListener('click', ()=>{
    let lista = document.querySelector('#lista')
    let li = document.createElement('li')

    li.textContent = input.value

    lista.insertBefore(li, lista.childNodes[0])

    input.value = ''
    input.focus()
})

btn2.addEventListener('click', ()=>{
    let lista = document.querySelector('#lista')
    let num = lista.childNodes.length
    alert(num)
})