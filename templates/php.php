<?php
// Comentário de uma linha

/*
  Comentário de múltiplas linhas
*/

// Variáveis
$variavel = 10;
$variavelString = "Texto";
$variavelArray = [1, 2, 3];
$variavelObjeto = (object) ['chave' => 'valor'];

// Tipos de Dados
$numero = 42;
$booleano = true;
$float = 3.14;

// Funções
function minhaFuncao($parametro1, $parametro2) {
    return $parametro1 + $parametro2;
}

$funcaoAnonima = function($parametro1, $parametro2) {
    return $parametro1 + $parametro2;
};

// Classes
class MinhaClasse {
    private $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    public function metodo() {
        echo $this->nome;
    }
}

$instancia = new MinhaClasse("Exemplo");

// Estruturas de Controle
if ($booleano) {
    echo "Verdadeiro";
} else {
    echo "Falso";
}

for ($i = 0; $i < 10; $i++) {
    echo $i;
}

while ($variavel < 30) {
    $variavel++;
}

do {
    $variavel++;
} while ($variavel < 40);

// Operadores
$soma = 1 + 2;
$subtracao = 3 - 1;
$multiplicacao = 2 * 3;
$divisao = 6 / 2;
$modulo = 5 % 2;
$incremento = ++$variavel;
$decremento = --$variavel;
$atribuicao = $variavel += 10;

// Operadores Lógicos
$e = true && false;
$ou = true || false;
$negacao = !true;

// Operadores de Comparação
$igual = 1 == "1";
$identico = 1 === 1;
$diferente = 1 != 2;
$naoIdentico = 1 !== "1";
$maiorQue = 5 > 3;
$menorQue = 3 < 5;
$maiorOuIgual = 5 >= 5;
$menorOuIgual = 3 <= 5;

// Arrays e Manipulação de Arrays
$numeros = [1, 2, 3, 4, 5];
$numerosDobrados = array_map(fn($num) => $num * 2, $numeros);
$numerosFiltrados = array_filter($numeros, fn($num) => $num > 2);
$somaNumeros = array_reduce($numeros, fn($acc, $num) => $acc + $num, 0);

// Manipulação de Strings
$stringConcat = "Olá, " . $variavelString . "!";
$comprimento = strlen($variavelString);
$subString = substr($variavelString, 0, 4);

// Exceções
try {
    throw new Exception("Algo deu errado!");
} catch (Exception $e) {
    echo $e->getMessage();
} finally {
    echo "Sempre executa";
}

// Superglobais
echo $_SERVER['REQUEST_METHOD'];
echo $_GET['parametro'] ?? 'Não definido';
echo $_POST['parametro'] ?? 'Não definido';
echo $_SESSION['usuario'] ?? 'Não definido';

// Módulos e Namespaces
namespace MeuNamespace;

function funcaoNamespace() {
    echo "Função no namespace";
}

use MeuNamespace\funcaoNamespace;

funcaoNamespace();

// Include e Require
include 'outro_arquivo.php';
require 'outro_arquivo_necessario.php';
