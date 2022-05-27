 // Tratamento de erros com Try catch

 /*
    Esse comando serve para tratar possiveis erros em nosso Scrpits, sua sintaxe é bem simples.

    A declaração Try catch marcam um bloco de declaração para testar (try), e especificar um resposta,
    caso uma execeção seja lançada

*/

try{ // Bloco de teste
    console.log("Leonardo Augusto - Desenvolvedor Front - end")
} catch(e){ // Interrupção na execução pretendida, caso cai em um erro
    console.log("Mensagem de Erro: " + e.message)

}

/** Exemplo de Try Catch com lançamento de erro no try.html */

