let cobra = [{x:10, y:10}];
let comida = gerarComida();
let direcao = 'DIREITA';
let velocidade = 150;
let pontos = 0;
let intervalo;

function iniciar(){
    criarTabuleiro();
    document.addEventListener('keydown', mudarDirecao);
    intervalo = setInterval(moverCobra, velocidade);
}

function criarTabuleiro(){
    const tabuleiro = document.getElementById('game-board');
    tabuleiro.innerHTML = '';

    cobra.forEach(segmento => {
        const elemento = document.createElement('div');
        elemento.style.gridRowStart = segmento.y;
        elemento.style.gridColumnStart = segmento.x;
        elemento.classList.add('snake');
        tabuleiro.appendChild(elemento);
    } );
    const elementoComida = document.createElement('div');
    elementoComida.style.gridRowStart = comida.y;
    elementoComida.style.gridColumnStart = comida.x;
    elementoComida.classList.add('food');
    tabuleiro.appendChild(elementoComida);
}
    function gerarComida(){
        let novaComida;
        while (!novaComida || posicaoOcupada(novaComida))
        {
            novaComida = {
            x:Math.floor(Math.random()*18)+2,
            y:Math.floor(Math.random()*18)+2
        };
     }
     return novaComida;
   }

function posicaoOcupada(posicao){
    return cobra.some(segmento=> segnmento.x === posicao.x && segmento.y===posicao.y);
}

function mudarDirecao(event){
    const tecla = event.key;
    if (tecla === "ArrowUp" && direcao !== 'BAIXO'){
        direcao = 'CIMA'
    } else if(tecla === 'ArrowDown' && direcao !== 'CIMA')
    {
        direcao = 'BAIXO';
    } else if(tecla === 'ArrowLeft' && direcao !== 'DIREITA'){
        direcao = 'ESQUERDA';
    } else if(tecla === 'AroowRight' && direcao !== 'ESQUERDA'){
        direcao = 'DIREITA';
    }
} 