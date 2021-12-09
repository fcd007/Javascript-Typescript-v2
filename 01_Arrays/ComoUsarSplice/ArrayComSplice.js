/*
* Para melhor comprensão do uso de Arrays (Objeto) vou criar exemplo básico e 
* e depois vamos adicionar objetos com mais complexidade
*/

// todos os Arrays possuem índices que começam com o valor zero ( 0 );
//               -6         -5         -4         -3         -2          -1
//             nomes[0],  nomes[1],  nomes[2],  nomes[3],  nomes[4],   nomes[5]
const nomes = ['Carlos', 'Letícia', 'Joaquim', 'Fabiano', 'Mauricio', 'Danilo'];

// para uso do nomes.splice(índice, delete, elemento1, elemento2, elemento3);

//podemos remover o último elemento do array - operação pop();
// retorno do splice é um array, ele pode retornar mais de um elemento
const removidos = nomes.splice(3, 2);
console.log(nomes);
console.log(removidos);

//para poder realizar troca ou swap de valores pelo índice
const listagemDeNomes = nomes.splice(3, 1, 'Dantas007');
console.log(nomes);
console.log(listagemDeNomes);

// vamos simula o pop
const listaNomes = nomes.splice(-1, 1);
console.log(nomes, listaNomes);

//vamos simular o remover do início do array - shift
const listaNomesRemovidos = nomes.splice(0, 1);
console.log('Teste ', nomes, listagemDeNomes);

//vamos simula ro push - adicionar no final do array
nomes.splice(nomes.length, 0, 'Juliana');
console.log(nomes);

//vamos adicionar no início do array
nomes.splice(0, 0, 'Francisco');
console.log(nomes);