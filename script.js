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
        101: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/bloco-a-escada-direita.png', 'fotos/bloco-b-escada.png', 'fotos/bloco-b-corredor.png', 'fotos/blocos/B/101/101B-1.png'],
        102: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/bloco-a-escada-direita.png', 'fotos/bloco-b-escada.png', 'fotos/bloco-b-corredor.png', 'fotos/blocos/B/102/102B-1.png'],
        103: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/bloco-a-escada-direita.png', 'fotos/bloco-b-escada.png', 'fotos/bloco-b-corredor.png', 'fotos/blocos/B/103/103B-1.png'],
        104: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/bloco-a-escada-direita.png', 'fotos/bloco-b-escada.png', 'fotos/bloco-b-corredor.png', 'fotos/blocos/B/104/104B-1.png'],
        201: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/bloco-a-escada-direita.png', 'fotos/bloco-b-escada.png', 'fotos/bloco-b-escada-escada.png', 'fotos/bloco-b-corredor-corredor.png', 'fotos/blocos/B/201/201B-1.png'],
        202: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/bloco-a-escada-direita.png', 'fotos/bloco-b-escada.png', 'fotos/bloco-b-escada-escada.png', 'fotos/bloco-b-corredor-corredor.png', 'fotos/blocos/B/202/202B-1.png'],
        203: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/caminho-esquerda-reto.png', 'fotos/rampa.png', 'fotos/escada-inicial.png', 'fotos/bloco-a-escada-direita.png', 'fotos/bloco-b-escada.png', 'fotos/bloco-b-escada-escada.png', 'fotos/bloco-b-corredor-corredor.png', 'fotos/blocos/B/203/203B-1.png'],
    },
    C: {
        1: ['fotos/catraca.png', 'fotos/caminho-esquerda.png', 'fotos/bloco-c', 'fotos/blocos/C/1/1C-1.png'],
    },
    D: {
        2: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/blocos/D/2/2D-1.png'],
        3: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/blocos/D/3/3D-1.png'],
        4: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/blocos/D/4/4D-1.png'],
        5: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/blocos/D/5/5D-1.png'],
        6: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/blocos/D/6/6D-1.png'],
        7: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/blocos/D/7/7D-1.png'],
        8: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/blocos/D/8/8D-1.png'],
        9: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/blocos/D/9/9D-1.png'],
        10: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/blocos/D/10/10D-1.png'],
        11: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/bloco-d-escada.png', 'fotos/bloco-d-escada-escada.png', 'fotos/bloco-d-escada-direita.png', 'fotos/blocos/D/11/11D-1.png'],
        12: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/bloco-d-escada.png', 'fotos/bloco-d-escada-escada.png', 'fotos/bloco-d-escada-direita.png', 'fotos/blocos/D/12/12D-1.png'],
        13: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/bloco-d-escada.png', 'fotos/bloco-d-escada-escada.png', 'fotos/bloco-d-escada-direita.png', 'fotos/blocos/D/13/13D-1.png'],
        22: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/bloco-d-entrada.png', 'fotos/bloco-d-escada.png', 'fotos/bloco-d-escada-escada.png', 'fotos/bloco-d-escada-esquerda.png', 'fotos/blocos/D/22/22D-1.png'],
    },
    E: {
        1: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/bloco-e-rampa.png', 'fotos/bloco-e-rampa-fim.png', 'fotos/blocos/E/1/1E-1.png'],
    },
    F: {
        101: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-f-esquerda.png', 'fotos/bloco-f-escada.png', 'fotos/bloco-f-escada-escada.png', 'fotos/bloco-f-escada-escada-cima.png', 'fotos/blocos/F/101/101F-1.png'],
        102: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-f-esquerda.png', 'fotos/bloco-f-escada.png', 'fotos/bloco-f-escada-escada.png', 'fotos/bloco-f-escada-escada-cima.png', 'fotos/blocos/F/102/102F-1.png'],
        103: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-f-esquerda.png', 'fotos/bloco-f-escada.png', 'fotos/bloco-f-escada-escada.png', 'fotos/bloco-f-escada-escada-cima.png', 'fotos/blocos/F/103/103F-1.png'],
        201: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-f-esquerda.png', 'fotos/bloco-f-escada.png', 'fotos/bloco-f-escada-escada.png', 'fotos/bloco-f-escada-escada-cima.png', 'fotos/blocos/F/201/201F-1.png'],
        202: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-f-esquerda.png', 'fotos/bloco-f-escada.png', 'fotos/bloco-f-escada-escada.png', 'fotos/bloco-f-escada-escada-cima.png', 'fotos/blocos/F/202/202F-1.png'],
        203: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-f-esquerda.png', 'fotos/bloco-f-escada.png', 'fotos/bloco-f-escada-escada.png', 'fotos/bloco-f-escada-escada-cima.png', 'fotos/blocos/F/203/203F-1.png'],
        301: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-f-esquerda.png', 'fotos/bloco-f-escada.png', 'fotos/bloco-f-escada-escada.png', 'fotos/bloco-f-escada-escada-cima.png', 'fotos/blocos/F/301/301F-1.png'],
        302: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-f-esquerda.png', 'fotos/bloco-f-escada.png', 'fotos/bloco-f-escada-escada.png', 'fotos/bloco-f-escada-escada-cima.png', 'fotos/blocos/F/302/302F-1.png'],
    },
    G: {
        1: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/arvores-direita.png', 'fotos/blocos/G/1/1G-1.png'],
        2: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/arvores-direita.png', 'fotos/blocos/G/2/2G-1.png'],
        3: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/bloco-g-azul.png', 'fotos/bloco-g-azul-direita.png', 'fotos/blocos/G/3/3G-1.png'],
        4: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/bloco-g-azul.png', 'fotos/bloco-g-azul-direita.png', 'fotos/blocos/G/4/4G-1.png'],
        101: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-g-escada-direita.png', 'fotos/blocos/G/101/101G-1.png'],
        102: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-g-escada-direita.png', 'fotos/blocos/G/102/102G-1.png'],
        103: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-g-escada-direita.png', 'fotos/blocos/G/103/103G-1.png'],
        104: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-g-escada-direita.png', 'fotos/blocos/G/104/104G-1.png'],
        105: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-g-escada-direita.png', 'fotos/blocos/G/105/105G-1.png'],
        106: ['fotos/catraca.png', 'fotos/caminho-reto.png', 'fotos/tunel.png', 'fotos/tunel-esquerda.png', 'fotos/esquerda-cantina.png', 'fotos/tunel-cantina.png', 'fotos/escada-azul.png', 'fotos/bloco-g-escada-direita.png', 'fotos/blocos/G/106/106G-1.png'],
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
        // Verifica se a sala existe
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