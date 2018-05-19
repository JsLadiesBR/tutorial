
// funcao de carregar as imagens e outros recursos
var preload = function () {

    this.load.atlas('hamtaro', 'assets/sprites/hamtaro/hamham.png', 'assets/sprites/maps/hamham2.json')

    // abrirAtlas(this, {
    //     nome: 'hamtaro',
    //     url: 'assets/sprites/hamtaro/hamham.png',
    //     urlmap: 'assets/sprites/maps/hamham.json'
    // })

}

// funcao para criar o jogo
var create = function () {


    this.anims.create({ 
        key: 'diamond', 
        frames: this.anims.generateFrameNames('hamtaro', { 
            prefix: 'sprite', 
            end: 43, 
            zeroPad: 41 
        }),
        repeat: -1 
    });

    this.add.sprite(400, 100, 'hamtaro').play('diamond');

    // Configurar os controles
    cursors = configurarTeclado(this)

}


var update = function (time, delta) { }



// Lista da rotina principal do jogo
var principal = function () {
    
    // pega altura e largura da tela
    var largura = window.innerWidth
    var altura = window.innerHeight

    // cria um novo jogo
    var game = criarJogo({
        type: Phaser.AUTO,
        width: largura,
        parent: 'phaser-example',
        pixelArt: true,
        height: altura,
        backgroundColor: '#b3e6ff',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    })

}


// Quando a janela do navegador
window.onload = principal