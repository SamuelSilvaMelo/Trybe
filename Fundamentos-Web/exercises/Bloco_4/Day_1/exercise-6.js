// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

let chessPiece = 'king'

chessPiece = chessPiece.toLowerCase();

switch (chessPiece) {
  case 'king':
    console.log('King -> Can move to one of the eight squares around it.');
    break;
  case 'queen':
    console.log('Queen -> Can move diagonally, horizontally, or vertically any number of squares. She are unable to jump over pieces.');
    break;
  case 'rooks':
    console.log('Rooks -> Can move horizontally or vertically any number of squares. They are unable to jump over pieces.');
    break
  case 'bishops':
    console.log('Bishops -> Can move diagonally any number of squares. They are unable to jump over pieces.');
    break;
  case 'knights':
    console.log('Knights -> Can move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.');
    break
  case 'pawns':
    console.log('Pawns -> Can move vertically forward one square, with the option to move two squares if they have not yet moved.  Pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king.');
    break;
  default:
    console.log('Error! Invalid word')
}
