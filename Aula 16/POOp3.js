/* Getter e Setter, são funções utilizados para alterar os atributos da nossa class (objeto)

   Getter -> São os metodos que obtem os atributos
   
   Setter -> Metodo que é utilizado para atribuir um valor do objeto

*/

class Carro {
    // Atributos// 
    cor = 'Vermelho' // Podemos declarar os atributos antes do construtor ou dentro isso é de programador para programador
    constructor(c,m,mar,cor){
        this.modelo = m
        this.cor = cor
        this.marca = mar
        this.ligado = false
        this.cor = c // Estou criando uma variável para o objeto carro através do this, sé estiver sem o this cor será uma variável que vai valer apenas dentro do método
        
    }

    info(){ // Metodo 
        console.log('Cor: ' + this.cor)
        console.log('Marca: ' + this.marca)
        console.log('Modelo: ' + this.modelo)
        console.log(this.ligado ? 'Estado: Ligado' : 'Estado: Desligado')
    }

    ligar(){
        this.ligado = true
    }

    desliga(){
        this.ligado = false
    }

    setModelo(){ // Esse set faz parte do nome do metodo
        this.modelo = 'FordK'
    }

    set setmodel(){
        this.modelo = 'FordK'
    }

    get getmodel(){
        return this.model
    }
}

let c1 = new Carro('Vermelho', 'FORD', 'GT', false)


c1.info()
console.log(c1.getmodel())




