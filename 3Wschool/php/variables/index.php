<!DOCTYPE html>
<html lang="PT">
    <head>
        <meta charset="utf-8">
        <title>PHP VARIAVEIS</title>
</head>
<body>
<pre>
<?php
//VARIAVEIS SAO ELEMENTOS OU CONTAINER QUE USAMOS PARA ARMAZENAR INFORMACOES
//EM PHP DECLARAMOS VARIAVEIS COMECANDO COM $ SEGUIDO PELO NOME DA VARIAVEL
//NO PHP NAO TEMOS COMANDO DE DECLARACAO DE VARIAVEIS COMO NO JS let, var, const
//QUANDO QUEREMOS COLOCAR UM TEXTO NUMA VARIAVEL COLOCAMOS O TEXTO ENTRE ASPAS

$x = 5;
$y = "John";

//NP PHP $NOME E DIFERENTE DE $nome
//NO PHP OS NOMES DAS VARIAVEIS SO DEVEM COMECAR COM LETRAS OU SUBLINHADOS _

//echo = ESTE COMANDO USAMOS PARA IMPRIMIR OU EXIBIR VALORES NA TELA
//PODEMOS CONTATENAT COLOCANDO O NOME DA VARIAVEL OU USANDO .
$txt = "3wschool.com";
echo "I love $txt!<br><br.";

$TXT = "3wschool.com";
echo "I love ". $TXT . "!";

//SOMANDO 2 VARIAVEIS 
$first_number = 5;
$second_number = 5;
$resultted = $first_number + $second_number;
echo $resultted . "<br><br>";

//var_dump() == RETORNA O TIPO DE DADOS DA VARIAVEL
$type = "Fabio Tomas";
var_dump($type);
var_dump(5);
var_dump("Fabio");
var_dump(3.14);
var_dump(true);
var_dump([2, 3, 65]);
var_dump(NULL);

//ATRIBUINDO O MESO VALOR A VARIAS VARIABEIS NA MESMA LINHS
$A = $B = $C = "fruta  <br>";
echo $A;
echo $B;
echo $C;
?>
</pre>
</body>
</html> 