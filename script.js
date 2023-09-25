// Combinações de bloco e número da sala para matrizes de URLs de imagem
const imagensURL = {
    A: {
        101: ['fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/101/101A-1.png'],
        102: ['fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/102/102A-1.png'],
        103: ['fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/103/103A-1.png'],
        104: ['fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/104/104A-1.png'],
        105: ['fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/105/105A-1.png', 'fotos/blocos/A/105/105A-2.png'],
    },
    B: {
        101: [],
        102: [],
        103: [],
        104: [],
        105: [],
    },
    C: {
        101: [],
        102: [],
        103: [],
        104: [],
        105: [],
    },
    D: {
        101: [],
        102: [],
        103: [],
        104: [],
        105: [],
    },
    E: {
        101: [],
        102: [],
        103: [],
        104: [],
        105: [],
    },
    F: {
        101: [],
        102: [],
        103: [],
        104: [],
        105: [],
    },
    G: {
        101: [],
        102: [],
        103: [],
        104: [],
        105: [],
    }
};

document.getElementById('busca').addEventListener('click', function () {
    // Limpa a galeria
    document.getElementById('galeria').innerHTML = '';

    // Obtém o bloco selecionado
    const blocoselecionado = document.getElementById('bloco').value;

    // Obtém o número da sala selecionado
    const numeroselecionado = document.getElementById('numero').value;

    // Verifique se o número da sala é válido (101 a 105)
    if (numeroselecionado >= 101 && numeroselecionado <= 105) {
        // Obtém a matriz de URLs das imagens para a combinação selecionada
        const combinacaoBN = imagensURL[blocoselecionado][numeroselecionado];

        // Verifica se há imagens para exibir
        if (combinacaoBN.length > 0) {
            // Exibe as imagens correspondentes
            for (let i = 0; i < combinacaoBN.length; i++) {
                const imagem = document.createElement('img');
                imagem.src = combinacaoBN[i];
                document.getElementById('galeria').appendChild(imagem);
            }
        } else {
            // Exibe a mensagem "Não encontrado" se nenhuma imagem for encontrada
            const naoencontrado = document.createElement('p');
            naoencontrado.textContent = 'Infelizmente não temos nenhuma rota para essa sala. 🙁';
            document.getElementById('galeria').appendChild(naoencontrado);
        }
    } else {
        alert('Não se esqueça de colocar o número da sala, ou veja se o valor está correto, porque com certeza tem algo de errado! 😉');
    }
});