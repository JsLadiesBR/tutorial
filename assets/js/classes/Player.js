const Player = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,
    initialize: function Player (scene, x, y){
        Phaser.GameObjects.Sprite.call(this, scene)
        this.scene = scene
        this.setTexture('hamtaro_atlas')
        this.setPosition(x, y)
        // this.createAnimations()
        // console.log(this)
        scene.children.add(this)
    },
    createAnimations: function () {
        // Cria as animações
        this.scene.anims.create({ 
            key: 'direita', 
            frames: this.scene.anims.generateFrameNames('hamtaro_atlas', { 
                prefix: 'hamtaro_', 
                end: 3, 
                start: 1
            }),
            repeat: -1,
            duration: 300
        });

        this.scene.anims.create({ 
            key: 'esquerda', 
            frames: this.scene.anims.generateFrameNames('hamtaro_atlas', { 
                prefix: 'hamtaro_', 
                end: 6, 
                start: 4
            }),
            repeat: -1,
            duration: 300
        });

        this.scene.anims.create({ 
            key: 'cima', 
            frames: this.scene.anims.generateFrameNames('hamtaro_atlas', { 
                prefix: 'hamtaro_', 
                end: 8, 
                start: 7
            }),
            repeat: -1,
            duration: 300
        });

        this.scene.anims.create({ 
            key: 'baixo', 
            frames: this.scene.anims.generateFrameNames('hamtaro_atlas', { 
                prefix: 'hamtaro_', 
                end: 10, 
                start: 9
            }),
            repeat: -1,
            duration: 300
        });

        this.scene.anims.create({ 
            key: 'normal', 
            frames: this.scene.anims.generateFrameNames('hamtaro_atlas', { 
                prefix: 'hamtaro_', 
                end: 12, 
                start: 11
            }),
            repeat: -1,
            duration: 300
        });

        this.scene.anims.create({ 
            key: 'comer', 
            frames: this.scene.anims.generateFrameNames('hamtaro_atlas', { 
                prefix: 'hamtaro_',
                end: 12,
                start: 11
            })
        });
    }
})