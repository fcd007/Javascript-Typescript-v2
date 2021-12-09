/*
* Vamos utilizar a concatenação de Arrays ( Objetos ) no Javascript
* A partir de dois arrays ou manipulando o resultado de operações.
*/

// criando dois arrays de números inteiros
const arrayNumeros01 = [1, 2, 3];
const arrayNumeros02 = [4, 5, 6];

//defindo um array para receber os arrays concatenados
console.log('Concatenado com método concat');
const arrayNumerosConcatenado = arrayNumeros01.concat(arrayNumeros02);
console.log(arrayNumerosConcatenado);

// podemos utilizar o spread operator para juntar os dois arrays.
const arraySpredConcatenando = [...arrayNumeros01, ...arrayNumeros02];
console.log('Concatenado com Spred operator');
console.log(arraySpredConcatenando);