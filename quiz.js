fetch("perguntas.json")
    .then(response => response.json())
    .then(perguntas => {
        let perguntaAtual = 0;
        let acertos = 0;

        // Função para exibir a próxima pergunta
        function proximaPergunta() {
            if (perguntaAtual < perguntas.length) {
                // Exibe a pergunta atual
                const pergunta = perguntas[perguntaAtual];
                document.getElementById("pergunta").textContent = pergunta.operacao + " = ?";
                document.getElementById("resultado").textContent = "";

                // Adiciona evento de clique ao botão verificar
                const verificar = function () {
                    const resposta = parseInt(document.getElementById("resposta").value);
                    if (resposta === pergunta.resposta) {
                        document.getElementById("resultado").textContent = "Resposta correta!";
                        acertos++;
                    } else {
                        document.getElementById("resultado").textContent = "Resposta incorreta!";
                    }
                    perguntaAtual++;
                    proximaPergunta();
                    document.getElementById("verificar").removeEventListener("click", verificar);
                };
                document.getElementById("verificar").addEventListener("click", verificar);
                document.getElementById("resposta").value = "";
                document.getElementById("resposta").focus();

            } else {
                // Fim do quiz
                document.getElementById("pergunta").textContent = "Fim do quiz!";
                document.getElementById("resposta").style.display = "none";
                document.getElementById("resultado").textContent = "Você acertou " + acertos + " de " + perguntas.length + " perguntas.";
                document.getElementById("verificar").style.display = "none";
                document.getElementById("reiniciar").style.display = "block";
            }
        }

        // Inicia o quiz
        proximaPergunta();

        // Reinicia o quiz
        document.getElementById("reiniciar").addEventListener("click", function () {
            perguntaAtual = 0;
            acertos = 0;
            document.getElementById("resultado").textContent = "";
            document.getElementById("resposta").value = "";
            document.getElementById("resposta").style.display = "block";
            document.getElementById("verificar").style.display = "block";
            document.getElementById("reiniciar").style.display = "none";
            proximaPergunta();
        });

    })
    .catch(error => console.log(error));
