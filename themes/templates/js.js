// Comentário de uma linha

/*
  Comentário de múltiplas linhas
*/

// Variáveis
const constante = 10;
let variavelLet = 20;
var variavelVar = 30;

// Tipos de Dados
const string = "Texto";
const number = 42;
const booleano = true;
const array = [1, 2, 3, true ];
const objeto = { chave: "valor" };
const funcaoAnonima = function() {};
const funcaoArrow = () => {};

// Funções
function funcaoDeclarada(parametro1, parametro2) {
    return parametro1 + parametro2;
}

const funcaoExpressao = function(parametro1, parametro2) {
    return parametro1 + parametro2;
};

// Classes
class MinhaClasse {
    constructor(nome) {
        this.nome = nome;
    }

    metodo() {
        console.log(this.nome);
    }
}

const instancia = new MinhaClasse("Exemplo");

// Estruturas de Controle
if (booleano) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

while (variavelLet < 30) {
    variavelLet++;
}

do {
    variavelVar++;
} while (variavelVar < 40);

// Operadores
const soma = 1 + 2;
const subtracao = 3 - 1;
const multiplicacao = 2 * 3;
const divisao = 6 / 2;
const modulo = 5 % 2;
const incremento = ++variavelLet;
const decremento = --variavelVar;
const atribuicao = variavelLet += 10;

// Operadores Lógicos
const e = true && false;
const ou = true || false;
const negacao = !true;

// Operadores de Comparação
const igual = 1 == "1";
const identico = 1 === 1;
const diferente = 1 != 2;
const naoIdentico = 1 !== "1";
const maiorQue = 5 > 3;
const menorQue = 3 < 5;
const maiorOuIgual = 5 >= 5;
const menorOuIgual = 3 <= 5;


// Destructuring
const { chave } = objeto;
const [primeiroElemento] = array;

// Template Strings
const saudacao = `Olá, ${string}!`;

// Módulos (import e export)
import { modulo } from './modulo.js';
export const minhaConstante = 42;
export default funcaoExpressao;

// Promises
const promise = new Promise((resolve, reject) => {
    if (booleano) {
        resolve("Sucesso!");
    } else {
        reject("Erro!");
    }
});

// Async/Await
async function funcaoAssincrona() {
    try {
        const resultado = await promise;
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

// Exceções
try {
    throw new Error("Algo deu errado!");
} catch (erro) {
    console.error(erro);
} finally {
    console.log("Sempre executa");
}

// Map, Filter, Reduce
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(num => num * 2);
const numerosFiltrados = numeros.filter(num => num > 2);
const somaNumeros = numeros.reduce((acc, num) => acc + num, 0);

// Set e Map
const meuSet = new Set([1, 2, 3, 4, 4]);
const meuMap = new Map();
meuMap.set("chave1", "valor1");
meuMap.set("chave2", "valor2");

// Symbol e Iterators
const meuSymbol = Symbol("descricao");
const meuIterator = array[Symbol.iterator]();
