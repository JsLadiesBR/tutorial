var Hamtaro = new Phaser.Class({

    initialize:

    function Hamtaro (game, x, y, name)
    {
        // crio um sprite de acordo com o atlas que abri no preload
        this.hamtaro = adicionarSprite(game, { 
            x: x,
            y: y,
            nome: name,
            mapname: name
        })

        game.anims.create({ 
            key: 'esquerda', 
            frames: game.anims.generateFrameNames('hamtaro', { 
                prefix: 'sprite', 
                end: 43, 
                start: 41
            }),
            repeat: -1 
        });

        this.velocidade = 1
        this.tempoMovimento = 0
        this.direcao = 'DIREITA'
    },

    update: function (time) {
        if (time >= this.tempoMovimento)
        {
            return this.mover(time);
        }
    },

    esquerda: function () {
        this.hamtaro.play('esquerda')
        // this.hamtaro.anims.animationManager.play('esquerda')
        this.direcao = 'ESQUERDA'
    },

    direita: function () {
        this.direcao = 'DIREITA'
    },

    cima: function () {
        this.direcao = 'CIMA'
    },

    baixo: function () {
        this.direcao = 'BAIXO'
    },

    mover: function (tempo) {
        switch (this.direcao) {
            case 'ESQUERDA':
                this.hamtaro.x = Phaser.Math.Wrap(this.hamtaro.x - 1, 0, 2000)
                break
            case 'DIREITA':
                this.hamtaro.x = Phaser.Math.Wrap(this.hamtaro.x + 1, 0, 2000)
                break
            case 'CIMA':
                this.hamtaro.y = Phaser.Math.Wrap(this.hamtaro.y - 1, 0, 2000)
                break
            case 'BAIXO':
                this.hamtaro.y = Phaser.Math.Wrap(this.hamtaro.y + 1, 0, 2000)
                break                
        }

        this.tempoMovimento = tempo + this.velocidade 

        return true
    }

});