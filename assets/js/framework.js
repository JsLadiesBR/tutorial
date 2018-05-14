
/*
    Descricao do método:
        Esse método é responsável por criar o jogo

        @params:
*/

function criarJogo (conf) {
    return new Phaser.Game(conf)
}

// funcoes para o preload

/*
    Descrição do método:
        Esse método serve para carregar um recurso de imagem

        @params
            escopo: tipo Game
            nome: tipo String
            url: tipo String
*/
function abrirImagem (escopo, nome, url) {
    escopo.load.image(nome, url);
}

/*
    Descrição do método:
        Esse método serve para carregar um recurso de imagem que será usada como um sprite

        @params
            escopo: tipo Game
            c.nome: tipo String
            c.url: tipo String
            c.largura: tipo Integer
            c.altura: tipo Integer
            c.frame: tipo String
*/
function abrirSprites(escopo, c) {
    escopo.load.spritesheet(c.nome, c.url. c.largura, c.altura, c.frame)
}

/*
    Descrição do método:
        Esse método serve para carregar um recurso de imagem que será usada como um sprite com atlas
        
        @params
            escopo: tipo Game
            c.nome: tipo String
            c.url: tipo String
            c.urlmap: tipo String
*/
function abrirAtlas(escopo, c){
    escopo.load.atlas(c.nome, c.url, c.urlmap)
}



// funcoes pos preload

/*
    Descrição do método:
        Esse método cria um sprite apartir de algum recurso ja predefinido
        deve ser informado a posição onde esse sprite deve ser colocado e o nome referente ao recurso
        que deverá ser usado para representar esse sprite.

        @params
            escopo: tipo Game
            c.x: tipo Integer
            c.y: tipo Integer
            c.nome: tipo String

*/
function adicionarSprite(escopo, c) {
    if (c.mapname == undefined) return escopo.add.sprite(c.x, c.y, c.nome)
    return escopo.add.sprite(c.x, c.y, c.nome, c.mapname)
}

/*
    Descrição do método:
    Este método retonar uma configuração de animação para adicionada em algum sprite

    @params
        escopo: tipo Game
        nome: tipo String

*/
function adicionarAnimacao(escopo, nome) {
    return escopo.add.animations.add(nome)
}

/* 
    Descrição do metodo:
    Uma vez que um sprite tem uma animação ela pode ser ativada passando pelos parametros
    o sprite q se deseja animar, o nome da animacao e o parametro que determina se existe loop ou nao
    
    @params
        sprite: tipo Sprite
        nome: tipo String
        loop: tipo Boolean
*/
function animarSprite(sprite, nome, loop) {
    if (loop == undefined) loop = false
    sprite.animations.play(nome, loop)
}

/* 
    Descrição do metodo:
    Para posicionar na tela um sprite que foi criado apartir de um atlas, é necessário escolher um frame
    especifico do atlas (Para escolher esse frame, procure pela propriedade filename do seu JSON de atlas)
    alem disso, escolha a posicão x e y para posicionar a imagem, e largura e altura são opcionais.
    
    @params
        escopo: tipo Game
        c.largura: tipo Integer
        c.altura: tipo Integer
        c.x: tipo Integer
        c.y: tipo Integer
        c.nome: tipo String
        c.frame: tipo String
*/
function adicionarTileSprite(escopo, c) {
    if (c.largura == undefined) c.largura = window.innerWidth
    if (c.altura == undefined) c.altura = window.innerHeight
    return escopo.add.tileSprite(c.x, c.y, c.largura, c.altura, c.nome, c.frame)
}


