// Estruturas condicionais
// Definem condições para algo acontecer

//Tenho a idade de uma pessoa
// const idade = parseFloat(prompt('Informe sua idade'));

//Quero checar se esta pessoa é maior de idade
// if => indica condicional
// () => dentro dos parêntes ficam as condições
// {} => dentro das chaves fica o bloco de instruções que serão executadas caso as condições sejam cumpridas
// else => senão: executa quando minha condição não passa
// else if => senão se: executa quando as condições anteriores não passaram, mas a condição atual passa
// if e else são únicos dentro de uma cadeia de condicionais e você pode ter quantos else if precisar

// Operadores de comparação:
// > maior que
// < menor que
// == igual a (comparando valores)
// === igual a (comparando valores e tipos)
// >= maior ou igual a
// <= menor ou igual a
// != diferente de (comparando valores)
// !== diferente de (comparando valores e tipos)


// if (idade >= 21) {
//   console.log('Maior de idade');
// } else if (idade >= 18) {
//   console.log('Maior de idade no Brasil');
// } else if (idade >= 16) {
//   console.log('Não é maior de idade, mas se viajar para os EUA já da pra tirar carteira de motorista');
// } else {
//   console.log('Menor de idade');
// }

// const pais = prompt('Insira seu país');
// const idade = parseFloat(prompt('Insira sua idade'));

// console.log('país', pais);
// console.log('tipo do país', typeof pais);
// console.log('idade', idade);
// console.log('tipo da idade', typeof idade);

// if (pais === 'BRASIL') {
//   if (idade >= 18) {
//     console.log('É maior de idade');
//   } else {
//     console.log('É menor de idade');
//   }
// } else if (pais === 'EUA') {
//   if (idade >= 21) {
//     console.log('É maior de idade');
//   } else if (idade >= 16) {
//     console.log('É menor de idade, mas pode tirar carteira');
//   } else {
//     console.log('É menor de idade');
//   }
// } else {
//   console.log('O país não foi encontrado na nossa base, logo estamos usando uma regra geral de maioridade para 21 anos.');
//   if (idade >= 21) {
//     console.log('É maior de idade');
//   } else {
//     console.log('É menor de idade');   
//   }
// }

// Operadores && e || (AND e OR)
// AND é &&
// OR é ||
// Cachorros com mais de 10 anos tem que tomar uma vacina e gatos com mais de 8 anos também precisam tomar esta mesma vacina.
// 

// const animal = prompt('Escreva se seu bicho é um cachorro ou gato.');
// const idade = parseFloat(prompt('Escreva a idade do seu bicho.'));
// const mensagemVacina = 'Tem que tomar vacina!';
// const mensagemSemVacina = 'As condições para tomar a vacina não foram cumpridas.';

// // Se o animal é um cachorro E a idade é maior ou igual a 10 OU se o animal é um gato E a idade é maior ou igual a 8.
// if ((animal === 'cachorro' && idade >= 10) || (animal === 'gato' && idade >= 8)) {
//   console.log(mensagemVacina);
// } else if (animal === 'cachorro' || animal === 'gato') {
//   console.log(mensagemSemVacina);
// } else {
//   console.log('Não encontramos este animal na nossa base.');
// }

// Switch: cadeia explícita de condicionais que vai checar diversos casos que podem ser encontrados.

// switch => indica que é esta cadeia
// () => dentro dos parênteses teremos o dado que será analisado
// {} => dentro das chaves teremos o bloco de instruções
// case <valor>: => indica um novo caso (valor não está escrito em tags)
// break => finaliza o bloco de instruções
// default: => o bloco que vai ser executado caso nenhuma das condições anteriores seja atingida

// logo abaixo da declaração de case, inicia-se o bloco de instruções que será executado caso entre naquela condição

const animal = prompt('Insira um animal');

switch (animal) {
  case 'cachorro':
    console.log('é um cachorro');
    console.log('latido');
    break;
  case 'gato':
    console.log('é um gato');
    console.log('miado');
    break;
  case 'vaca':
    console.log('é uma vaca');
    console.log('mugido');
    break;
  case 'cavalo':
    console.log('é um cavalo');
    console.log('relincho');
    break;
  default:
    console.log('Não conheço este animal');
    break;
}

// const num = parseFloat(prompt('Digite um número'));

// switch(num) {
//   case 4:
//   case 5: 
//     console.log('4 ou 5);
//     break;
//   case 3:
//     console.log('3');
//     break;
//   default:
//     console.log('outro número');
//     break;
// }

