function filtrarStringsCurtas(strings, tamanhoMinimo) {
    return strings.filter(string => string.length >= tamanhoMinimo);
}

const palavras = ["sol", "lua", "estrela", "planeta", "galáxia"];
const resultado = filtrarStringsCurtas(palavras, 5);

console.log(resultado)

/*Q03 - C
A função irá filtra as palavras dentro do array passado de acordo com o variável "tamanhoMinimo", nesse caso o "tamanhoMinimo" passado foi de 5, então apenas palavras com a quantidade de letras maior ou igual a 5 serão filtradas em "resultado" */