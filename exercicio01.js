const escola = prompt('Em qual escola você estuda?');
const nota1 = parseFloat(prompt('Insira sua primeira nota'));
const nota2 = parseFloat(prompt('Insira sua segunda nota'));
const nota3 = parseFloat(prompt('Insira sua terceira nota'));
const nota4 = parseFloat(prompt('Insira sua quarta nota'));
const somatoria = nota1 + nota2 + nota3 + nota4;
const aprovado = 'APROVADO';
const reprovado = 'REPROVADO';

switch(escola) {
  case 'A':
    if (somatoria > 60) {
      console.log(aprovado);
    } else {
      console.log(reprovado);
    }
    break;
  case 'B':
    if (somatoria > 70) {
      console.log(aprovado);
    } else {
      console.log(reprovado);
    }
    break;
  case 'C':
    if (
      somatoria > 60 &&
      nota1 >= 10 &&
      nota2 >= 10 &&
      nota3 >= 10 &&
      nota4 >= 10
    ) {
      console.log(aprovado);
    } else {
      console.log(reprovado);
    }
    break;
  default:
    console.log('Escola não encontrada');
    break;
}
