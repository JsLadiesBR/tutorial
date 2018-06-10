const createAnimations = function (game, conf) {
    conf.forEach(item => {
        game.anims.create({ 
            key: item.key, 
            frames: game.anims.generateFrameNames(item.atlas, { 
                prefix: item.prefix, 
                end: item.end, 
                start: item.start
            }),
            repeat: item.repeat,
            duration: item.duration
        })  
    })
}