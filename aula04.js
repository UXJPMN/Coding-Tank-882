// o laço tem número de repetições definidas
// for => indica que é um laço do tipo for
// () => vai ser onde as condições de repetição vão ser definidas
// let i = 0 => inicialização da variável para repetição
// i <= 5 => condição de parada
// i++ => tamanho do passo

// Números de 0 a 10
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 5 primeiros múltiplos de 3
// for (let i = 1; i <= 5; i++) {
//   console.log(i * 3);
// }

// Números de 10 a 0
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// Números pares até 20
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// Vetor ou array é uma variável com comportamento singular, pois ela armazena diversos valores
// [] => vai ser onde vamos colocar os itens presentes no vetor
// O conteúdo dentro do vetor não é seu valor, logo pode ser alterado mesmo dentro de uma const

const vetor = ['João', 'Alan', 'Andressa', 'Beatriz', 'Bianca', 'Bruno'];
// O valor da variável nome não está diretamente conectado ao valor representado por ela dentro do vetor
// let nome = 'Teste'
// const vetor = ['João', true, 21, nome, , undefined];

// [] => nesse caso indica a posição do item
// console.log(vetor[2]);

// for (let i = 0; i < 5; i++) {
//   console.log(vetor[i]);
// }

// length => é a propriedade que indica quantos itens existem no meu vetor.
// for (let i = 0; i < vetor.length; i++) {
//   nome = nome + i;
//   console.log(vetor[i]);
// }

// Se só usássemos um número grande teríamos vários valores
// for (let i = 0; i < 9999; i++) {
//   console.log(vetor[i]);
// }

// For-in percorre todos os indíces do vetor
// for => indica que é um laço do tipo for
// () => parâmetros da repetição
// i => nome da variável que vai representar o índice (pode ser qualquer nome)
// in => indica que vai percorrer índices
// vetor => variável quer armazena o vetor a ser percorrido

// console.log('Saída do For-in');
// for(i in vetor) {
//   console.log(i);
// }

// For-of percorre todos os valores do vetor
// Declaração é absolutamente igual ao for-in exceto que 'in' é substituído por 'of'
// of => indica que vai percorrer valores

// console.log('Saída do For-of');
// for(value of vetor) {
//   console.log(value);
// }


// const escola = prompt('Informe sua escola');
// const notas = [];
// const aprovado = 'APROVADO';
// const reprovado = 'REPROVADO';
// let somatoria = 0;
// let menorQue10 = false;

// for (let i = 0; i < 4; i++) {
//   notas[i] = parseFloat(prompt('Informe sua nota referente ao módulo ' + (i + 1)));
//   somatoria += notas[i];

//   if (notas[i] <= 10) {
//     menorQue10 = true;
//   }
// }

// switch(escola) {
//   case 'A':
//     if (somatoria > 60) {
//       console.log(aprovado);
//     } else {
//       console.log(reprovado);
//     }
//     break;
//   case 'B':
//     if (somatoria > 70) {
//       console.log(aprovado);
//     } else {
//       console.log(reprovado);
//     }
//     break;
//   case 'C':
//     if (somatoria > 60 && !menorQue10) {
//       console.log(aprovado);
//     } else {
//       console.log(reprovado);
//     }
//     break;
//   default:
//     console.log('Escola não identificada');
//     break;
// }

//Sequência de Fibonacci (imprimindo os 10 primeiros valores)
// const fibonacci = [];

// for (let i = 0; i <= 10; i++) {
//   if (fibonacci.length < 2) {
//     fibonacci[i] = 1;
//   } else {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   }

//   console.log(fibonacci[i]);
// }

// Matriz (em JavaScript) nada mais é que um vetor de vetores;
const matriz = [
  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ],
  [
    'QUALQUER VALOR, PORQUE É UMA ARRAY',
    [
      [9, 10, 11],
      [12, 13, 14],
      [15, 16, 17]
    ]
  ],
  [
    [18, 19, 20],
    [21, 22, 23],
    [24, 25, 26]
  ]
];

//Acha o valor 15 na matriz
console.log(matriz[1][1][2][0]);
