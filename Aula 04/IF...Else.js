/*IF...Else (SE e ENTÃO) é uma estrutura condicional que executa a afirmação, dentro de um bloco de determinada condição, se for true ele realiza
uma ação e for false outra...


if(Teste lógico){ <-- O comando de teste vai retornar dois valores possíveis 
    True = 1
    False = 0

*  O que é o teste lógico ?
    Ele será utilizado com os sinais de comparação
    
<- Comparadores ->

    Maior  > ex:  5 > 3 = true
    Menor < ex: 5 < 3 = false
    Maior ou igual >= ex: 11 >= 10 = true
    Menor ou igual <= ex: 9 <= 5 = false
    Diferente != ex: 10 != 12 = true
    Igualdade == ex: 5 == 5 = true


}
}
*/ 

var v1, v2

v1 = 1
v2 = 5
if(v1 > v2){
    console.log(v1 + ' é maior que ' + v2)
} else{
    console.log(v1 + ' Não é igual a ' + v2)
}

/* Nesse exemplo a cima estamos fazendo um Algoritmo que da return em uma message dependendo se o teste lógico cai em true ou false */