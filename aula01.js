// Se eu quiser exibir um alerta eu vou utilizar o comando "window.alert"
// O comando que vamos utilizar para exibir coisas no nosso console será o "console.log"
// O computador entende comandos de aritmética

//Soma
// console.log(13 + 8);
//Subtração
// console.log(13 - 8);
//Multiplicação
// console.log(2 * 5);
//Divisão
// console.log(8 / 2);
//Resto de divisão
// console.log(9 % 2);

//Variáveis alocam um espaço de memória para representar algum valor.
//Primeiro passo: var para definir que é uma variável
//Segundo passo: nome da variável
//Sinal de igual pra indicar atribuição
//Valor desejado para variável.
//Nota: textos devem sempre estar entre "" ou ''
// var olaMundo = 'Olá, mundo!';
// var soma = 5 + 2;
// var subtracao = soma - 3;

// console.log(olaMundo);
// console.log(soma);
// console.log(subtracao);

//Os programas modernos vão definir as variáveis com const e let.
//const são dados constantes e que não podem ser modificados.
//let são dados maleáveis e que permitem modificação.
// const num = 5;
// let texto = 'Texto aleatório';
// const ehVerdade = true;
// const numeroFalso = '5';
// const segundoNumero = 1;
// const textoInserido = prompt('Insira um texto.');

// texto = 'Novo texto';
// console.log(num);
// console.log(texto);
// console.log(texto + num + ehVerdade);
// console.log(numeroFalso + segundoNumero);
// console.log(parseFloat(numeroFalso) + segundoNumero);
// console.log(textoInserido);

//Calculadora: o usuário vai inserir um número, depois outro número e nosso programa fará a soma dos dois.
// const primeiroNumero = parseFloat(prompt('Insira um número'));
// const outroNumero = parseFloat(prompt('Insira outro número'));
// const soma = primeiroNumero + outroNumero;

// console.log(soma);

// Calculadora: o usuário vai inserir um número depois outro número e nosso programa fará a subtração dos dois.
// const primeiroNumero = parseFloat(prompt('Insira um número'));
// const segundoNumero = parseFloat(prompt('Insira outro número'));
// const subtracao = primeiroNumero - segundoNumero;

//Se você colocar os valores com vírgula o console sabe lidar com essa informação.
//console.log('', primeiroNumero, 'subtraido de', segundoNumero, '\n é igual a', subtracao);

//Tipos primitivos de variáveis:
//undefined: não tem tipo nem valor
//boolean: pode ser verdadeiro ou falso (true/false)
//string: texto
//number: número

//Tipos complexos de variáveis:
//function: funções
//object: objetos

//String:
const str = 'texto';

//typeof vai retornar o tipo da variável que está depois do espaço
console.log(typeof str, str);

//Number:
const num = 1;
const outroNumero = 1.3;
const nan = NaN;

console.log(typeof num, num);
console.log(typeof outroNumero, outroNumero);
console.log(typeof nan, nan);

//Boolean:
const verdadeiro = true;
const falso = false;

console.log(typeof verdadeiro, verdadeiro);
console.log(typeof falso, falso);

//Undefined:
let semValor;
const indefinido = undefined;

console.log(typeof semValor, semValor);
console.log(typeof indefinido, indefinido);

//Function:
const funcao = function(){};
const outraFuncao = () => {};

console.log(typeof funcao, funcao);
console.log(typeof outraFuncao, outraFuncao);

//Object:
const objeto = {};
const arr = []; //array
const nulo = null;

console.log(typeof objeto, objeto);
console.log(typeof arr, arr);
console.log(typeof nulo, nulo);
