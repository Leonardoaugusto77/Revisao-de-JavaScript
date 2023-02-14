/* Orientação aos objetos -> É um paradigma de Desenvolvimento de Software que busca seguir como o mundo real, ele tenta
imitar uma modelagem, os dados são encapsulados em objetos {} os objetos são as classes vivas assim por dizer 

Class - são os esqueletos do objeto, os projetos

Objeto - são as instâncias reais que podemos utilizar das class


Método construtor -> Normalmente tem o nome da mesma da classe, no JavaScript definimos com a palavra constructor

Constructor -> Ele será automaticamente chamada quando eu instanciar um objeto da classe

Atributos - são as propriedades as variáveis que eu aplico a classe

*/

class Carro {
    // Atributos// 
    cor = 'Vermelho' // Podemos declarar os atributos antes do construtor ou dentro isso é de programador para programador
    constructor(c){
        this.cor = c // Estou criando uma variável para o objeto carro através do this, sé estiver sem o this cor será uma variável que vai valer apenas dentro do método
        console.log('Olá, sou um novo carro: '+ this.cor)
    }
}

let c1 = new Carro('Vermelho')
let c2 = new Carro('Azul') // Agora dentro da instância temos que passar o value assim como nos parâmetros de uma função tradicional




