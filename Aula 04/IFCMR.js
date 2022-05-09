/*
IF com múltiplos retornos, basicamente vamos adicionar mais retornas as condições 
IF assim dando múltiplos retornos pra ela


Exemplo:

if(){

} else if(){ <--- Multiplo retorno

}

*/




var nota = 43
var res
// Aprovado >= 60
// Recuperação >= 40 && < 60
// Reprovado < 40 


if(nota >= 60){
    res = "Aprovado"
} else if((nota>=40)&&(nota<60)){
    res = "em Recuperação"
}else{
    res = "Reprovado"
}
console.log("Sua nota é " + nota + " Você está " + res + '!')