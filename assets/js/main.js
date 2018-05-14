
// funcao de carregar as imagens e outros recursos
var preload = function () {

    abrirAtlas(this, {
        nome: 'hamtaro',
        url: 'assets/sprites/hamtaro/hamtaro.png',
        urlmap: 'assets/sprites/maps/hamtaro.json'
    })

}

var hamtaro
// funcao para criar o jogo
var create = function () {

    // crio um sprite de acordo com o atlas que abri no preload
    hamtaro = adicionarSprite(this, { 
        x: 50,
        y: 50,
        nome: 'hamtaro',
        mapname: 'hamtaro1'
    })

    // posiciono o sprite em um local da tela
    hamtaro = adicionarTileSprite(this, {
        x: 10,
        y: 15,
        name: 'hamtaro',
        frame: 'hamtaro1'
    })

}

// Lista da rotina principal do jogo
var principal = function () {
    
    // pega altura e largura da tela
    var largura = window.innerWidth
    var altura = window.innerHeight

    // cria um novo jogo
    var game = criarJogo({
        type: Phaser.AUTO,
        width: largura,
        height: altura,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    })

}


// Quando a janela do navegador
window.onload = principal