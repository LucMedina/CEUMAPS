// Combinações de bloco e número da sala para matrizes de URLs de imagem
const imagensURL = {
    A: {
        101: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/101/101A-1.png'],
        102: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/102/102A-1.png'],
        103: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/103/103A-1.png'],
        104: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/104/104A-1.png'],
        105: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/blocos/A/105/105A-1.png', 'fotos/blocos/A/105/105A-2.png'],
        123: [], // A sala 123 não existe, MAS FOI COLOCADA COMO EXEMPLO para mostrar a mudança na mensagem de erro se a sala existisse porém ainda não há qualquer rota
    },
    B: {
        101: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', ],
        102: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', ],
        103: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', ],
        104: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', ],
        201: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', ],
        202: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', ],
        203: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', ],
    },
    C: {
        1: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', ],
    },
    D: {
        2: ['fotos/catraca.png', ],
        3: ['fotos/catraca.png', ],
        4: ['fotos/catraca.png', ],
        5: ['fotos/catraca.png', ],
        6: ['fotos/catraca.png', ],
        7: ['fotos/catraca.png', ],
        8: ['fotos/catraca.png', ],
        9: ['fotos/catraca.png', ],
        10: ['fotos/catraca.png', ],
        11: ['fotos/catraca.png', ],
        12: ['fotos/catraca.png', ],
        13: ['fotos/catraca.png', ],
        22: ['fotos/catraca.png', ],
    },
    E: {
        1: ['fotos/catraca.png', ],
    },
    F: {
        101: ['fotos/catraca.png', ],
        102: ['fotos/catraca.png', ],
        103: ['fotos/catraca.png', ],
        201: ['fotos/catraca.png', ],
        202: ['fotos/catraca.png', ],
        203: ['fotos/catraca.png', ],
        301: ['fotos/catraca.png', ],
        302: ['fotos/catraca.png', ],
    },
    G: {
        1: ['fotos/catraca.png', ],
        2: ['fotos/catraca.png', ],
        3: ['fotos/catraca.png', ],
        4: ['fotos/catraca.png', ],
        101: ['fotos/catraca.png', ],
        102: ['fotos/catraca.png', ],
        103: ['fotos/catraca.png', ],
        104: ['fotos/catraca.png', ],
        105: ['fotos/catraca.png', ],
        106: ['fotos/catraca.png', ],
    }
};

document.getElementById('busca').addEventListener('click', function () {
    // Limpa a galeria
    document.getElementById('galeria').innerHTML = '';

    // Obtém o bloco selecionado
    const blocoselecionado = document.getElementById('bloco').value;

    // Obtém o número da sala selecionado
    const numeroselecionado = document.getElementById('numero').value;

    // Verifique se o número da sala é válido (1 a 302)
    if (numeroselecionado >= 1 && numeroselecionado <= 302) {
        // Obtém a matriz de URLs das imagens para a combinação selecionada
        const combinacaoBN = imagensURL[blocoselecionado][numeroselecionado];
        //Verifica se a sala existe
        if (!combinacaoBN) {
            const naoexiste = document.createElement('p');
            naoexiste.textContent = 'A sala que você colocou não existe ou ainda não foi registrada. 😅';
            document.getElementById('galeria').appendChild(naoexiste);
        } else {
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
              naoencontrado.textContent = 'Infelizmente por enquanto não temos nenhuma rota para essa sala. 🙁';
              document.getElementById('galeria').appendChild(naoencontrado);
            }
        }
    } else {
        alert('Não se esqueça de colocar o número da sala, ou veja se o valor está correto, porque com certeza tem algo de errado! 😉');
    }
});