# PROJETO VALIDADOR CPF
Site com validador de CPF, feito com HTML, CSS e Javascript PURO (Vanilla JS)

## Processo de Validação do CPF
<p> O número de CPF é composto por 11 dígitos. Os 9 primeiros são os números base, e os 2 últimos são os chamados dígitos verificadores, que são utilizados para validar se os 9 números base estão corretos. <i><b> É importante lembrar que mesmo que o número seja válido, isso não quer dizer que ele  esteja cadastrado na Receita Federal. </b></i></p>
  
## Processo de Conta da Validação de CPF
  
    Vamos usar como exemplo, um CPF fictício "705.484.450-52".
  ### Validação do primeiro dígito
  
  <p>Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados. Assim: </p>

    7 * 10 + 0 * 9 + 5 * 8 + 4 * 7 + 8 * 6 + 4 * 5 + 4 * 4 + 5 * 3 + 0 * 2
    
  <p> O resultado do nosso exemplo é: </p>
                       
    237
    
 <p> O próximo passo da verificação também é simples, basta multiplicarmos esse resultado por 10 e dividirmos por 11. </p>  
       
    237 * 10 / 11
    
 <p> O resultado que nos interessa na verdade é o RESTO da divisão. Se ele for igual ao primeiro dígito verificador (primeiro dígito depois do '-'), a primeira parte da validação está correta.

<b> Observação Importante: </b> Se o resto da divisão for igual a 10, nós o consideramos como 0.

Vamos conferir o primeiro dígito verificador do nosso exemplo:</p>
  
    Temos 5 como RESTO da divisão


### Validação do segundo digito

<p> A validação do segundo dígito é semelhante à primeira, porém vamos considerar os 9 primeiros dígitos, mais o primeiro dígito verificador, e vamos multiplicar esses 10 números pela sequencia decrescente de 11 a 2. Vejamos: </p>
 
    7 * 11 + 0 * 10 + 5 * 9 + 4 * 8 + 8 * 7 + 4 * 6 + 4 * 5 + 5 * 4 + 0 * 3 + 5 * 2
    
<p> O resultado é: </p>

     284
  
<p> Seguindo o mesmo processo da primeira verificação, multiplicamos por 10 e dividimos por 11. </p>

    237 * 10 / 11
   
<p> E verificamos o RESTO, como fizemos anteriormente, temos: </p>

    2 como RESTO da divisão
  
<p> Os 2 ultimos digitos que obtivemos são: </p>  

    52
 
<p> Se os dois ultimos digitos que obtivemos forem iguais ao do CPF inserido, temos um CPF válido, caso os digitos forem diferentes, temos um CPF inválido </p>  
 
    
  ## FAQ
  
  ### E se todos os numeros inseridos forem iguais?
  
  <p> Se colocarmos todos os numeros iguais, o nosso validador iria constar que o CPF é valido, para evitar isso, colocamos uma checagem caso recebamos todos os numeros iguais, o resultado será de CPF invalido</p>
  
    EX.: 111.111.111-11 (Sem a checagem, iria retornar que o CPF é válido)
    
 ### Posso colocar pontos (.) e hífen (-) no Validador?
 
   <p> Pode colocar sim, pois o codigo tira os pontos e o hífen do CPF. <b> NÃO É OBRIGATÓRIO USAR OS PONTOS E HÍFEN </b></p>

