document.addEventListener("DOMContentLoaded", function () {
    // Array para armazenar os nomes dos amigos
    const amigos = [];
    let sorteados = []; // Array para armazenar os sorteios realizados

    // Função para adicionar amigo
    window.adicionarAmigo = function adicionarAmigo() {
        const input = document.getElementById("amigo");
        const nome = input.value.trim(); // Remove espaços em branco extras

        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }

        // Adiciona o nome ao array
        amigos.push(nome);

        // Atualiza a lista exibida
        atualizarListaAmigos();

        // Limpa o campo de texto
        input.value = "";
    };

    // Função para atualizar a lista de amigos
    function atualizarListaAmigos() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpa a lista antes de adicionar os itens

        amigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }

    
        }

        // Verifica se todos já foram sorteados
        if (sorteados.length === amigos.length) {
            alert("Todos os amigos já foram sorteados! Reinicie o sorteio para começar de novo.");
            return;
        }

        // Sorteia um amigo que ainda não foi sorteado
        let amigoSorteado;
        do {
            const indiceAleatorio = Math.floor(Math.random() * amigos.length);
            amigoSorteado = amigos[indiceAleatorio];
        } while (sorteados.includes(amigoSorteado));

        // Adiciona o sorteado na lista de sorteados
        sorteados.push(amigoSorteado);

        // Exibe o resultado do sorteio
        listaResultados.innerHTML = `<li>Amigo Secreto Sorteado: <strong>${amigoSorteado}</strong></li>`;
    };

    // Função para reiniciar o sorteio
    window.reiniciarSorteio = function reiniciarSorteio() {
        sorteados = []; // Limpa a lista de sorteados
        const listaResultados = document.getElementById("resultado");
        listaResultados.innerHTML = `<li>Sorteio reiniciado. Clique para começar novamente!</li>`;
    };
});
