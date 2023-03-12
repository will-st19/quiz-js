const fs = require("fs");

// Gera uma pergunta aleatória de adição, subtração, multiplicação ou divisão
function gerarPergunta() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let operacao = "";
    let resposta = 0;

    switch (Math.floor(Math.random() * 4)) {
        case 0:
            operacao = num1 + " + " + num2;
            resposta = num1 + num2;
            break;
        case 1:
            operacao = num1 + " - " + num2;
            resposta = num1 - num2;
            break;
        case 2:
            operacao = num1 + " * " + num2;
            resposta = num1 * num2;
            break;
        case 3:
            operacao = num1 + " / " + num2;
            resposta = num1 / num2;
            break;
    }

    return { "operacao": operacao, "resposta": resposta };
}

// Gera um array de perguntas
let perguntas = [];
for (let i = 0; i < 10; i++) {
    perguntas.push(gerarPergunta());
}

// Gera a data e hora atual para nomear o arquivo JSON
let data = new Date();
let dataFormatada = data.getDate().toString().padStart(2, "0") +
    (data.getMonth() + 1).toString().padStart(2, "0") +
    data.getFullYear().toString().substr(-2);
let horaFormatada = data.getHours().toString().padStart(2, "0") +
    data.getMinutes().toString().padStart(2, "0");

// Salva as perguntas em um arquivo JSON com o nome formatado
let nomeArquivo = "perguntas_" + dataFormatada + "_" + horaFormatada + ".json";
let conteudoArquivo = JSON.stringify(perguntas);
fs.writeFileSync(nomeArquivo, conteudoArquivo);
console.log(`Arquivo ${nomeArquivo} criado com sucesso.`);
