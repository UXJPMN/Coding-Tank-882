// Laço de Repetição
// Existem 3: while, do-while e for
// while: Vai testar se uma condição é atingida e continuar repetindo o bloco de instruções
// enquanto não for.
// do-while: Vai executar um bloco de instruções e repetir até uma condição ser atingida
// for: Vai repetir um bloco de instrução por uma quantidade de vezes determinada no código

// let num = 0;

// while(num < 10) {
//   console.log(num);
//   num = num + 1;
// }

// while => indicar que é uma laço de repetição while
// () => condições para o código repetir
// {} => bloco de instruções que será repetido

// let escolaValida = false;

// while(escolaValida === false) {
//   const escola = prompt('Informe sua escola');

//   switch(escola) {
//     case 'A':
//       console.log('Escola A');
//       escolaValida = true;
//       break;
//     case 'B':
//       console.log('Escola B');
//       escolaValida = true;
//       break;
//     case 'C':
//       console.log('Escola C');
//       escolaValida = true;
//       break;
//     default:
//       console.log('Escola não encontrada, por favor insira uma escola válida');
//       break;
//   }
// }

// let acertos = 0;
// let erros = 0;

// while(acertos < 3 && erros < 3) {
//   const num1 = Math.floor(Math.random() * 10);
//   const num2 = Math.floor(Math.random() * 10);
//   const resultado = num1 + num2;

//   console.log('Some os números: ', num1, num2);
//   const resposta = parseFloat(prompt('Qual o resultado?'));

//   if (resposta === resultado) {
//     console.log('Resposta correta!');
//     acertos = acertos + 1;
//   } else {
//     console.log('Resposta errada!');
//     erros = erros + 1;
//   }

//   console.log('Você tem ', acertos, ' acertos.');
//   console.log('Você tem ', erros, ' erros');
// }

// if (acertos === 3) {
//   console.log('Você venceu!');
// } else {
//   console.log('Você perdeu!');
// }

let numero = 0;
let somatoria = 0;

do {
  numero = parseFloat(prompt('Digite um número para ser somado, ou digite 0 para parar'));
  somatoria = somatoria + numero;
} while(numero !== 0 && somatoria < 20);

// while (numero !== 0 && somatoria < 20)) {
//   numero = parseFloat(prompt('Digite um número para ser somado, ou digite 0 para parar'));
//   somatoria = somatoria + numero;
// }

console.log('A somatória foi: ', somatoria);
