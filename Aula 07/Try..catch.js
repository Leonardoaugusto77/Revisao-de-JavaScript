 // Tratamento de erros com Try catch

 /*
    Esse comando serve para tratar possíveis erros em nosso Scrpits, sua sintaxe é bem simples.

    A declaração Try catch marcam um bloco de declaração para testar (try), e especificar um resposta,
    caso uma exceção seja lançada

*/
var num = 4

try{ // Bloco de teste
    if(num<5){
        console.log("Leonardo Augusto - Desenvolvedor Front - end")
    } else{
        throw new Error("Valor invalido")
    }
} catch(e){ // Interrupção na execução pretendida, caso cai em um erro
    console.log("Mensagem de Erro: " + e.message)
} finally{
    console.log("Fim da execução!!!")
}

/** Exemplo de Try Catch com lançamento de erro no try.html */

