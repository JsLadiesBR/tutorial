
// Funcao para retornar um valor randomico em um array
const random = array => array[Math.floor(Math.random() * array.length)]

// Funcao para retornar um valor randomico 
const randomNumber = (start, end) => Phaser.Math.Between(start, end)

// funcao de carregar as imagens e outros recursos
const preload = function () {

    // Carrega os recursos de imagens para o jogo
    this.load.atlas('hamtaro_atlas', 'assets/sprites/hamtaro/hamham.png', 'assets/sprites/maps/hamtaro.json')
    this.load.atlas('comida_atlas', 'assets/sprites/assest/food.png', 'assets/sprites/maps/food.json')
    
}

// funcao para criar o jogo
const create = function () {

    // Variavel para guardar a pontuação
    this.score = 0;

    // Adiciona um texto para informar o score a jogadora
    pontuacao = this.add.text(10, 10, 'SCORE: 0', { 
        fontFamily: 'Arial', 
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000' 
    })

    // Cria as animações
    this.anims.create({ 
        key: 'direita', 
        frames: this.anims.generateFrameNames('hamtaro_atlas', { 
            prefix: 'hamtaro_', 
            end: 3, 
            start: 1
        }),
        repeat: -1,
        duration: 300
    });

    this.anims.create({ 
        key: 'esquerda', 
        frames: this.anims.generateFrameNames('hamtaro_atlas', { 
            prefix: 'hamtaro_', 
            end: 6, 
            start: 4
        }),
        repeat: -1,
        duration: 300
    });

    this.anims.create({ 
        key: 'cima', 
        frames: this.anims.generateFrameNames('hamtaro_atlas', { 
            prefix: 'hamtaro_', 
            end: 8, 
            start: 7
        }),
        repeat: -1,
        duration: 300
    });

    this.anims.create({ 
        key: 'baixo', 
        frames: this.anims.generateFrameNames('hamtaro_atlas', { 
            prefix: 'hamtaro_', 
            end: 10, 
            start: 9
        }),
        repeat: -1,
        duration: 300
    });

    this.anims.create({ 
        key: 'normal', 
        frames: this.anims.generateFrameNames('hamtaro_atlas', { 
            prefix: 'hamtaro_', 
            end: 12, 
            start: 11
        }),
        repeat: -1,
        duration: 300
    });

    this.anims.create({ 
        key: 'comer', 
        frames: this.anims.generateFrameNames('hamtaro_atlas', { 
            prefix: 'hamtaro_', 
            end: 12, 
            start: 11
        })
    });

    // eixo x e y sendo definidos aleatoriamente
    let x = randomNumber(50, window.innerWidth - 50)
    let y = randomNumber(50, window.innerHeight - 50)

    // Cria um hamtaro que será controlado pela participante
    hamtaro = this.physics.add.sprite(150, 150, 'hamtaro_atlas')

    // Cria um sprite de comida
    comida = this.physics.add.sprite(x, y, 'comida_atlas', 'sprite92')

    // Outros exemplos de comida
    // cennoura = this.physics.add.sprite(50, 300, 'comida_atlas', 'sprite92')
    // pao = this.add.sprite(50, 150, 'comida_atlas', 'sprite88')
    // limao = this.add.sprite(350, 110, 'comida_atlas', 'sprite87')
    // banana = this.add.sprite(550, 900, 'comida_atlas', 'sprite86')
    // rabanete = this.add.sprite(390, 400, 'comida_atlas', 'sprite85')
    // cogumelo = this.add.sprite(700, 300, 'comida_atlas', 'sprite81')
    // laranja = this.add.sprite(200, 300, 'comida_atlas', 'sprite78')
    // figo = this.add.sprite(150, 300, 'comida_atlas', 'sprite77')
    // pera = this.add.sprite(550, 300, 'comida_atlas', 'sprite76')

    // Informa que o hamtaro e a comida são passíveis de colisão
    this.physics.add.collider(hamtaro, comida)

    // Cria o evento que acontecera quando o hamtaro colidir com uma comida
    this.physics.add.overlap(hamtaro, comida, function(){
        
        // Adiciona pontuação ao score
        this.score += 3
        
        // Adiciona a informação ao texto da tela
        pontuacao.setText(`SCORE: ${this.score}`)
        
        // Escolhe randomicamente a nova posicao da comida
        comida.x = randomNumber(50, window.innerWidth - 50)
        comida.y = randomNumber(50, window.innerHeight - 50)
        
        // Cada numero indica uma imagem para uma comida diferente
        let number = [92, 88, 87, 86, 85, 81, 78, 77, 76]
        
        // Escolhe um numero da lista acima 
        number = random(number)
        
        // Troca a imagem da comida de acordo com o numero escolhido
        comida.setTexture('comida_atlas', `sprite${number}`)

    }, null, this);

    // Captura todas as teclas do teclado
    cursors = this.input.keyboard.createCursorKeys()

}

// funcao para atualizar o jogo
const update = function () {

    // Controle pelas setas esquerda direita cima e baixo do teclado
    if (cursors.left.isDown) {
        // movimenta o hamtaro em relacao ao eixo x
        hamtaro.x -= 3
        // anima o sprite com uma animacao escolhida
        hamtaro.anims.play('esquerda', true)
    } else if (cursors.right.isDown) {
        hamtaro.x += 3
        hamtaro.anims.play('direita', true)
    } else if (cursors.up.isDown) {
        hamtaro.y -= 2
        hamtaro.anims.play('cima', true)
    } else if (cursors.down.isDown) {
        hamtaro.y += 2
        hamtaro.anims.play('baixo', true)
    } else {
        hamtaro.anims.play('normal')
    }

}

// Lista da rotina principal do jogo
const principal = function () {

    // pega altura e largura da tela
    const largura = window.innerWidth
    const altura = window.innerHeight

    // cria um novo jogo
    const conf = {
        type: Phaser.AUTO,
        width: largura,
        parent: 'jsladies-game',
        pixelArt: true,
        height: altura,
        backgroundColor: '#b3e6ff',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    }

    const game = Phaser.Game(conf)

}

// Quando a janela do navegador
window.onload = principal
