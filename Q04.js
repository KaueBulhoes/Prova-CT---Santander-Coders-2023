/*Desenvolva uma função ehPalindromo que verifica se uma string é um palíndromo. Um palíndromo é uma palavra ou frase que é a mesma, quer seja lida da esquerda para a direita ou da direita para a esquerda, ignorando espaços, pontuações e capitalização. Por exemplo, ehPalindromo("Ana") deve retornar true. */

function ehPalindromo(palavra) {
    let palavraLimpa = palavra.toLowerCase().replace(/[^a-z0-9]/g, ''); //Pensando em casos em que o usuárío irá digitar a palavra

    let palavraInvertida = palavraLimpa.split('').reverse().join(''); //separa, reverte, junta de novo

    return palavraLimpa === palavraInvertida;
}

let listaExemplo = ["Ana", "Race car", "Sopa de letrinhas", "omissíssimo", "Olé! Maracujá, caju, caramelo!", "Teclado"];
let resultados = listaExemplo.map((exemplo) => ({ //mapeaia todos os itens dentro do array
    exemplo: exemplo, //cria um objeto chave:valor que irá ser colocado a string original e depois traz verdadeiro ou falso como resultado da função ehPalindromo
    resultado: ehPalindromo(exemplo)
}));

resultados.forEach((itemLista) => { //arrow function para imprimir cada exemplo e seu resultado
    console.log(`${itemLista.exemplo}: ${itemLista.resultado}`);
});