var dv1 = document.querySelector('#dv1')

function trocar (e) {
   let obj = e.target
   obj.style.backgroundImage = "url('Rectangle 200.png')"
}

dv1.addEventListener('click', trocar)