/*
IF Aninhado = é um if que está dentro de outro if como se fosse uma boneca russa

*/


var nota = 76
var res
// Aprovado >= 60
// Recuperação >= 40 && < 60
// Reprovado < 40 


if(nota >= 60){
    res = "Aprovado"
    if(nota >=95){
        res += " com louvor"
    } else {
        res += " com nota normal" // Concatenação com o += (mais igual)
    }
} else if(nota >= 40){
    res = 'Recuperação'
} else{
    res = "Reprovado"
    if(nota >=20){ 
    res += ' por nota baixa'
 } else{ // Exemplo de IF aninhadi
     res += " com louvor"
 }
}

console.log(res)