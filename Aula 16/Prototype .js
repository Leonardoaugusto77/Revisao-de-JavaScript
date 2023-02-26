/* Prototype -> Representa o prototipo do objeto, com eles podemos criar ou sobrescrever*/

class Carro{
    constructor(tpComb){
        this.qtdeComb = 100
        this.ligado = false
        this.tipoComb = tpComb
    }

    info(){
        console.log('Qtde Combus ' + this.qtdeComb)
        console.log('Ligado ' + (this.ligado ? 'Sim' : 'Não'))
        console.log('Combustível ' + this.tipoComb)
    }


    set setligado(t){
        this.ligado = t
    }

    get getligado(){
        return this.log
    }
}

class carroCombate extends Carro{ /* Assim carroCombate vai hendar itens da classe Carro */
    constructor(potTiro){
        super(1) // Estou passando o tipo de combus atráves de parametros, com o super vamos acessar a classe base
        this.tiros = 1000
        this.potTiros = potTiro
        this.blidagem = 100
    }

    info(){

        super.info()

        console.log('Tiros ' + this.tiros)
        console.log('Potencia dos Tiros ' + this.potTiros)
        console.log('Potencia dos Tiros ' + this.blidagem)
    }
}

Carro.prototype.potencia = 0
Carro.prototype.velmax = 100

Carro.prototype.infos = () => {
    console.log('1 ' + this.potencia)
    console.log('2 ' + this.velmax)
}

let c = new carroCombate('100%')


c.infos()
