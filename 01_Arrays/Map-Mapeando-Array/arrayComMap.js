const pessoas = [
  {
    nome: "Ruan Francisco Jorge Farias",
    idade: 74,
    cpf: "770.341.205-87",
  },
  {
    nome: "Edson Igor Nathan Araújo",
    idade: 52,
    cpf: "847.040.007-02",
  },
  {
    nome: "Marcos Vinicius Pedro Henrique Campos",
    idade: 35,
    cpf: "853.853.946-96",
  },
  {
    nome: "Raul Márcio Benedito Rezende",
    idade: 76,
    cpf: "983.578.895-22",
  },
  {
    nome: "André Thiago da Silva",
    idade: 72,
    cpf: "240.089.534-18",
  },
  {
    nome: "Pedro Henrique Raul Sebastião Cavalcanti",
    idade: 19,
    cpf: "641.777.790-16",
  },
  {
    nome: "Juan Fábio Pedro Henrique Ferreira",
    idade: 23,
    cpf: "910.874.759-88",
    rg: "43.730.742-6",
    data_nasc: "02/01/2000",
    sexo: "Masculino",
  },
  {
    nome: "Otávio Juan Elias Rocha",
    idade: 55,
    cpf: "420.301.999-07",
  },
  {
    nome: "Gustavo Tomás Victor Duarte",
    idade: 20,
    cpf: "979.574.466-63",
  },
];

//map vai receber uma funcao de callback - retornar um novo array do mapeamento
//cria array de idades
//cria array de CPFs
//criar um array de nomes
const idadesMapeadas = pessoas.map((valor) => {
  return valor.idade;
});

const nomesMapeadas = pessoas.map((valor) => {
  return valor.nome;
});

const cpfsMapeadas = pessoas.map((valor) => {
  return valor.cpf;
});

//vamos remover o indice idade, pois precisamos mapear nome e cpf do usuario na lista de exibicao
const listaPessoaFisica = pessoas.map(index => {
  //criando um objeto simplificado sem o indice idade
  //poderia dar um delete index.idade
  let pessoaFisica = { nome: index.nome, cpf: index.cpf };
  return pessoaFisica;
});

const listaPessoaIdade = pessoas.map(index => {
  //criando um objeto simplificado sem o indice cpf
  //poderia dar um delete index.cpf
  let pessoaIdade  = { nome: index.nome, cpf: index.idade };
  return pessoaIdade;
});

//vamos criar um objeto com id
const listaComIds = pessoas.map((objeto, index) => {
  //criando um objeto simplificado com id
  let objetoCopy = {
    id: (index + 1),
    nome:objeto.nome,
    cpf: objeto.cpf,
    idade: objeto.idade

  };
  
  return objetoCopy;
});

//vamos criar um objeto com id versao otimizada com spreed operator
const listaComIdsV2 = pessoas.map((objeto, index) => {
  //criando um objeto simplificado com id
    // let objetoCopy = { id: (index + 1) };
    let objetoCopy = {id: (index + 1), ...objeto};
  return objetoCopy;
});