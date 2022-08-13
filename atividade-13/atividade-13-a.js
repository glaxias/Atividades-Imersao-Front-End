/*
Atividade 13
Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
Use métodos de array e use let e const para variáveis.
*/
(function () {
    /*
    1 - Declare uma variável que contenha um array com 5 nomes de cidades em strings.
    Imprima o tamanho desse array.
    */
        console.warn("Exercício 1");
        const nomesDeCidades = ["São Paulo", "Nova Iorque", "Londres", "Tóquio", "Paris"];
        console.log(nomesDeCidades.length);

    /*
    2 - Declare uma variável que contenha um array com 5 nomes de países em strings.
    Adicione um país no começo do array.
    Adicione um país no fim do array.
    Imprima esse array.
    */
        console.warn("Exercício 2");
        const nomeDePaises = ["Bélgica", "Alemanha", "Egito", "Portugal", "Cabo Verde"];
        console.log(nomeDePaises);

        nomeDePaises.unshift("China");
        console.log(nomeDePaises);

        nomeDePaises.push("Argentina");
        console.log(nomeDePaises);

    /*
    3 - Declare uma variável que contenha um array com 5 nomes de livros em strings.
    Remova um item no começo do array.
    Remova um item no fim do array.
    Imprima esse array.
    */
        console.warn("Exercício 3");
        const nomeDeLivros = ["Lovecraft Country", "Simon vs. A Agenda Homo Sapiens", "O Sobrinho do Mago", "Em Chamas", "Fahrenheit 451"];
        console.log(nomeDeLivros);

        nomeDeLivros.shift();
        console.log(nomeDeLivros);

        nomeDeLivros.pop();
        console.log(nomeDeLivros);

    /*
    4 - Declare uma variável que contenha um array com 5 números entre 10 e 99.
    Coloque em um novo array 3 desses números.
    Imprima esse novo array.
    */
        console.warn("Exercício 4");
        let numerosEntre10e99 = [13, 26, 42, 66, 95];
        console.log(numerosEntre10e99);

        let algunsNumeros = numerosEntre10e99.slice(1, 4);
        console.log(algunsNumeros);

    /* 
    5 - Declare uma variável que contenha um array com 5 vogais em strings.
    Coloque esse array ao contrário e una todas essas letras em uma string.
    Imprima em um console.log.
    */
        console.warn("Exercício 5");
        const vogais = ["A", "E", "I", "O", "U"];
        console.log(vogais.reverse().join(" - "));
})();
