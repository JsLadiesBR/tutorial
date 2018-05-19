
// funcao de carregar as imagens e outros recursos
var preload = function () {
    this.load.atlas('hamtaro', 'assets/sprites/hamtaro/hamham.png', 'assets/sprites/maps/hamham2.json')
}

// funcao para criar o jogo
var create = function () {


    this.anims.create({ 
        key: 'direita', 
        frames: this.anims.generateFrameNames('hamtaro', { 
            prefix: 'sprite', 
            end: 43, 
            start: 41
        }),
        repeat: -1,
        duration: 300
    });

    this.anims.create({ 
        key: 'esquerda', 
        frames: this.anims.generateFrameNames('hamtaro', { 
            prefix: 'sprite', 
            end: 40, 
            start: 38
        }),
        repeat: -1,
        duration: 300
    });

    this.anims.create({ 
        key: 'cima', 
        frames: this.anims.generateFrameNames('hamtaro', { 
            prefix: 'sprite', 
            end: 31, 
            start: 30
        }),
        repeat: -1,
        duration: 300
    });

    this.anims.create({ 
        key: 'baixo', 
        frames: this.anims.generateFrameNames('hamtaro', { 
            prefix: 'sprite', 
            end: 35, 
            start: 34
        }),
        repeat: -1,
        duration: 300
    });

    hamtaro = this.add.sprite(400, 100, 'hamtaro')

    cursors = configurarTeclado(this)
}


var update = function (time, delta) {

    if (cursors.left.isDown) {
        hamtaro.play('esquerda')
    } else if (cursors.right.isDown) {
        hamtaro.play('direita')
    } else if (cursors.up.isDown) {
        hamtaro.play('cima')
    } else if (cursors.down.isDown) {
        hamtaro.play('baixo')
    }

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