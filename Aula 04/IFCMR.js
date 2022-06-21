/*
IF com múltiplos retornos, basicamente vamos adicionar mais retornas as condições 
IF assim dando múltiplos retornos para ela

Exemplo:

if(){

} else if(){ <--- Multiplo retorno

}

OBS...
Quando temos várias possibilidades de retorno não utilizamos o AND e OR, só utilizamos
quando temos vários valores para o mesmo retorno 
*/




var nota = 43
var res
// Aprovado >= 60
// Recuperação >= 40 && < 60
// Reprovado < 40 


if(nota >= 60){
    res = "Aprovado"
} else if((nota>=40)&&(nota<60)){ // Dois valores para o mesmo retorno 
    res = "em Recuperação"
}else{
    res = "Reprovado"
}
console.log("Sua nota é " + nota + " Você está " + res + '!')