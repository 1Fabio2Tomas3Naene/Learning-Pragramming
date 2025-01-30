<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title> first page php </title>
</head>
<body>
    <h1>My first page PHP</h1>
    <br>
    <br>
    <?php
    #ESTA VARIAVEL E DIFERENTE DAS OUTRAS
    $txt = "ola mundo <br>";

    //ESTA VARIAVEL E DIFERENTE DAS OUTRAS
    $Txt = "hello world <br>";

    /*USAMOS ESTE SINAL PARA 
    COMENTAR O NOSSO 
    CODIGO OCUPANDO MULTIPLAS LINHAS PARA NOS LENBRAR O QUE ESTAVAMOS FAZENDO E
    PARA QUE OUTROS PROGRAMADORES POSSAM LER E ENTENDER O NOSSO CODUGO*/

    $tXt = "salout mund<br><br>";
    echo $txt;
    //Echo $Txt;
    eCho $tXt; //mensagem de sdaudacao

    $x = 5 /*+ 5*/ + 5;
    echo $x;
    ?>
</body>
    </html>