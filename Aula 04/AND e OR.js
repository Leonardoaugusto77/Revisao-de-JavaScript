/* AND (&&) e OR(||) <- São comparadores que trabalham com valores booleanos

   AND (&&) <- Só retorna verdadeiro quando todos os testes forem True
   
   AND - Table

   V + F = F
   F + V = F
   V + V = V
   F + F = F
   
   

   OR - (||), só retorna falso quando todos os testes forem falsos

   OR - Table
   V + F = V
   F + V = V
   V + V = V
   F + F = F


*/



var pontos = 40
// Vitoria => >=30 <=40 || >= 70 && <=80

   // V                    V 
if((pontos >=30 ) && (pontos <= 40) // = V 
  
  ||
  
  // F                  V
  (pontos>= 70) && (pontos) <=80){ // = F
       // Para funcionar a comparação é importante usar parênteses uns dentro dos outros 


       console.log("Você Ganhou!") // É interessante não deixar tudo em uma linha, mas isso depende do tamanho da comparação que você que fazer!                        
} else{
    console.log("Você perdeu!")
}