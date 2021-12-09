/*
* Vamos trabalhar com recursos para manipulação de filtro em arrays
* retorna sempre a mesma quantidade ou menos, ele irá filtrar o array.
*/

// Retorne os números maiores que 10
const arrayDeNumerosInteiros = [5, 50, 0, 10, 15, 5, 2, 3, 5, 17, 21, 27];

// O filter ele não altera o array original, apenas retorna o array de filtro
// o método filter recebe uma função de callback
function callBackFilter (valor, indice, array) {
   return (valor > 10);
}
// podemos para expressões de retorno falso e verdadeiro usar o 
// operador ternário expressao ? valor1 : valor2
function callBackFilterTernario (valor) {
  return valor > 10 ? true :false;
}
//realizando o filtro dos valores usando a função de callBack
const arrayNumerosMaioresQueDez = arrayDeNumerosInteiros.filter(callBackFilterTernario);
console.log('Usando callback:', arrayNumerosMaioresQueDez);

// podemos criar uma callback funções anônimas
const arrayNumerosResultadoFuncao = arrayDeNumerosInteiros.filter(function (valor) { 
  return (valor > 10)
});
console.log('Usando função anônima:', arrayNumerosResultadoFuncao);

//podemos criar uma arrow function para retornar os valores do array
const arrayNumerosResultado = arrayDeNumerosInteiros.filter((valor) => { return (valor > 10) });
console.log('Usando Arrow funtion:', arrayNumerosResultado);

// Retorne as pessoas que tem o nome com 5 letras ou mais.
// Retorne as pessoas com mais de 50 anos.
// Retorne as pessoas cujo nome termina com a letra 'a'
const arrayPessoas = [
  { nome: 'Roberto', idade: 51},
  { nome: 'Beteto', idade: 53},
  { nome: 'Romário', idade: 52},
  { nome: 'Cesar', idade: 21},
  { nome: 'Carlos', idade: 30},
  { nome: 'Lima', idade: 25},
  { nome: 'Zico', idade: 48},
  { nome: 'Davi', idade: 29}
]

const pessoasResultadoNomes = arrayPessoas.filter((elemento) => {
  return elemento.nome.length > 5;
});
console.log('Nomes maiores que 5 letras: ', pessoasResultadoNomes);

const pessoasResultadoIdade = arrayPessoas.filter((elemento) => {
  return elemento.idade > 50;
});
console.log('Idade maior que 50 ', pessoasResultadoIdade);