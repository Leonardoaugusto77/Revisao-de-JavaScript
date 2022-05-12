/** IF Aninhado, basicamente e de forma resumida ele é um if dentro do outro
    para ficar mais claro vamos aos exemplos

    if (condição)
{ 
    if (condição)
    { 
        //código que será executado quando a condição for verdadeira
    } 
}


OBS: é importante saber a diferança de um condição simples e uma condição composta


condição simples 
    if(condição){
        true
    }

condição composta
    if(condição){
        true
    } else {
        false
    }


    Ea Terceiro tipo de condição é a aninhado

    If(cond1){

    } else{
        if(cond2){

        } else{
            cond3
        }
    }



*/



var nota = 22
var res 

if(nota >= 60){
    if(nota>=95){
        res="Aprovado com louvor!"  // Aqui seria o aninhamento do if e else 
    } else{
        res="Aprovado com nota normal!"
    }
 } else if(nota >= 40){
     res = "Recuperação!"
 } else{
     if(nota >= 20){
         res = "Reprovado por nota baixa!"
     } else{
         res = "Reprovado com louvor!"
     }
 }

 console.log('Sua nota é ' + nota + ', você foi ' + res)