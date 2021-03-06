// Trabalhando com data e hora

/* Nessa aula vamos trabalhar com Date(), ele é uma instância JavaScript que
   representa um único momento no tempo */



var dt = new Date() // A partir de agora a Var dt pode utilizar todos os métodos do Date
var diaSem = dt.getDay() // Pega o dia 
var dia = dt.getDate() // A data
var mes = dt.getMonth() // O mês
var ano = dt.getFullYear() // O Ano 

var horas = dt.getHours() // pega as horas da maquina
var minutos = dt.getMinutes() // minutos
var segundos = dt.getSeconds() // secundos


var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

var semanas = ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]

console.log(semanas[diaSem] + ", " + dia + " de " + meses[mes] + " de " + ano)

console.log(horas + ":" + minutos + ":" + segundos)


// Podemos utilizar o Set para alterar a data e hora, caso você queria adiconar 4 dias a mais na data atual

// Com o date você pode utilizar e manipular Ano, Mês, Dia, Hora, Min, Seg e MilSegundo 

/* ndt.setFullYear(dt.getFullYear()+2) <-- Aqui eu estou adicionando dois anos na minha data atual*/