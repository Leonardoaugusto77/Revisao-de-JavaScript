/* Objetos literais -> É utilizado como container de dados */

const Carro = {
    marca: 'VW',
    modelo: 'Golf',

    info: (...n) => {
        console.log('Marca: ' + Carro.marca)
        console.log('Modelo: ' + Carro.modelo)
    }
}

Carro['marca']='V8'
Carro['modelo']='Ford'

Carro.info()
