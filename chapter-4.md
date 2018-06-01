# Capitulo 4 - Criando seu jogo

## Desenvolvendo um Jogo com JavaScript

Vamos agora iniciar o desenvolvimento de um jogo simples usando alguns dos conceitos que aprendemos hoje. Preparamos para você um projeto pré-configurado com tudo que você vai presisar para construir e publicar seu jogo na internet.

* [Projeto pré-configurado](https://github.com/JsLadiesBR/tutorial-hamtaro)

No final desse capítulo você terá esse jogo implementado:

* [O jogo](http://hamtaro-jsladies.surge.sh/)

O código final se encontra nesse link:

* [Projeto Completo](https://github.com/JsLadiesBR/tutorial)

`OBS: Usaremos o framework Phaser para construção do jogo`

### Criando e configurando o ambiente

#### Instalação do projeto

Uma vez que você já tem o **nodejs** instalado e já baixou o **projeto pré-configurado**, já podemos iniciar a instalação das dependências do projeto, para isso, abra o terminal no diretório do **projeto pré-configurado** e digite o comando:

```text
$ npm install
```

Após a instalação das dependências, já podemos iniciar o servidor http, utilizando o comando:

```text
$ npm run dev
```

### Iniciando o jogo

Nós escreveremos o código dentro do arquivo **main.js**, ele deve estar dentro do diretório **assets/js**

Nele você deverá escrever o seguinte código:

```text
function preload () {}

function create () {}

function update () {}

function principal () {}

// Estamos adicionando uma função para o evento OnLoad da janela
window.onload = principal
```

**preload, create, update** são as nossas cenas do jogo que serão criadas.

* **preload**: É a nossa primeira cena, aonde carregará todos os recursos visuais e sonoros que poderão vir a ser implementados no jogo.
* **create**: É a nossa segunda cena, aonde os elementos do jogo são configurados, essa cena é importante pois é nela que se encontra toda a lógica do jogo.
* **update**: É a nossa terceira cena, nessa cena podemos sempre atualizar o estado do jogo, como por exemplo a movimentação dos personagens.

A função **principal** vocês verão no proximo tópico.

### Configurando o jogo

Para iniciarmos um jogo precisamos informar algumas configurações básicas. O nosso framework exige que essas configurações sejam feitas para que ele possa entender o que você vai tentar implementar. Então vamos voltar ao código, olhando agora para a função **principal**:

```text
function principal () {

    var largura = ''
    var altura = ''

    // cria uma variável com as configurações do jogo
    var conf = {
        type: Phaser.AUTO,
        width: largura,
        height: altura,
        pixelArt: true,
        backgroundColor: '',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: null,
            create: null,
            update: null
        }
    }

    var game = Phaser.Game(conf)
}
```

Vamos começar a configurar o exemplo anterior alterando os valores, primeiro definiremos uma largura e uma altura para a nossa tela do jogo:

```text
    var largura = 500
    var altura = 500
```

Se você deseja que a tela do jogo seja o tamanho da tela da janela do seu navegador, ou seja, que ocupe toda a tela, você pode fazer assim:

```text
    var largura = window.innerWidth
    var altura = window.innerHeight
```

Agora, vamos definir uma cor para o fundo da tela do jogo, procure por **backgroundColor** no exemplo acima e adicione uma cor de sua preferencia:

```text
  backgroundColor: '#b3e6ff'
```

As cores são em hexadecimal, você pode procurar uma cor nesse [link](https://html-color-codes.info/Codigos-de-Cores-HTML/)

Por fim, vamos definir as nossas cenas **preload, create e update**. Por padrão o framework necessita que essas cenas sejam criadas e informadas na configuração. Então basta apenas adicionar a sua assinatura dessa forma:

```text
    scene: {
        preload: preload,
        create: create,
        update: update
    }
```

Agora que ja temos o nosso jogo configurado, podemos visualizar no navegador como está ficando a primeira cara do jogo.

### Importando os recursos para o jogo

Como sabemos os jogos possuem vários recursos gráficos e sonoros, são esses recursos que melhoram a experiência do jogador. No nosso jogo não será diferente, dentro do diretório **assets/sprites** temos algumas imagens que vão nos acompanhar durante esse capitulo. Essas imagens são chamadas de [**sprites**](https://www.tecmundo.com.br/video-game-e-jogos/1044-o-que-sao-sprites-.htm). Agora vamos importar elas para o nosso jogo.

```text
// funcao de carregar as imagens e outros recursos
const preload = function () {

    // Carrega os recursos de imagens para o jogo
    this.load.atlas('hamtaro_atlas', 'assets/sprites/hamtaro/hamham.png', 'assets/sprites/maps/hamtaro.json')
    this.load.atlas('comida_atlas', 'assets/sprites/assest/food.png', 'assets/sprites/maps/food.json')

}
```

Vamos apenas comparar essas linhas de código e entender o que é cada coisa que estamos escrevendo:

```text
    this.load.atlas( identificacao-do-sprite , endereco-da-imagem, endereco-do-mapeamento-json)
    this.load.atlas('hamtaro_atlas', 'assets/sprites/hamtaro/hamham.png', 'assets/sprites/maps/hamtaro.json')
```

`OBS: A primeira linha é um exemplo, a segunda linha é o nosso recurso importado anteriormente`

* A **identificacao-do-sprite** vai ser o nome que vou informar ao framework que eu quero dar a imagem que estou carregando. Escolhi como nome: **hamtaro\_atlas**
* O **endereco-da-imagem** é aonde se encontra as imagens do recurso que quero usar. No caso, elas estão dentro de: **assets/sprites/hamtaro/hamham.png**
* O **endereco-do-mapeamento-json** é aonde se encontra o mapeamento da imagem. Usamos o **JSON** para guardar informações de tamanho e posição de cada sprite contido na imagem. Então esse arquivo se encontra em: **assets/sprites/maps/hamtaro.json**

### Criando um elemento de texto

Vamos adicionar algum elemento de texto na nossa tela, utilizando uma função do framework **add.text\(\)**:

```text
function create () {

    // Adiciona um texto para informar o score a jogadora
    pontuacao = this.add.text(10, 10, 'SCORE: 0', { 
        fontFamily: 'Arial', 
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    })

}
```

Assim como fizemos no exemplo anterior, vamos analisar o que está sendo feito:

```text
    this.add.text( x , y , texto , configuracao )
```

Chamamos de parametros todas essas informações que ficam separadas entre virgulas e entre parenteses. Os nossos parametros são:

* **x** e **y**, que serão usados para determinar a posição que ficará o texto na tela. Usamos o plano cartesiano para orientar os elementos visuais na tela do computador. Então **x** e **y** esperam valores númericos e inteiros.
* **texto**, é propriamente o texto que queremos escrever na tela
* **configuração**, será todo o estilo que iremos aplicar no nosso texto. Podemos informar qual fonte \(_fontFamily_\) queremos usar, o seu tamanho \(_fontSize_\), o seu peso \(_fontWeight_\) e a cor \(_color_\)

**Após adicionar as novas linhas salve as alterações e atualize o seu navegador, veja o que aconteceu**

### Criando um elemento sprite

Agora vamos para a parte mais divertida! Vamos adicionar o nosso personagem! Ainda na função **create**, vamos adicionar mais algumas linhas de código.

**OBS:** Para te orientar usaremos: **...** Isso significa que existe um código adicionado em uma etapa anterior.

```text
function create () {

    ...

    // Cria um hamtaro que será controlado pela participante
    hamtaro = this.physics.add.sprite(150, 150, 'hamtaro_atlas')

}
```

Analisando o comando:

```text
this.physics.add.sprite( x , y , identificacao-do-sprite )
```

Já vimos nos exemplos anteriores o que cada uma dessas informações significam. A **identificacao-do-sprite** foi definida no momento que fiz o carregamento dos recursos. Chamamos o recurso de **hamtaro\_atlas**

**Após adicionar as novas linhas salve as alterações e atualize o seu navegador, veja o que aconteceu**

### Gravidade

Percebemos que o sprite apareceu e logo em seguida sofreu um efeito de queda. Isso acontece devido as nossas configurações de jogo. No inicio desse capítulo fizemos algumas configurações, procure por esse bloco de código e altere o valor de **gravity: { y: 200 }** para **gravity: { y: 0 }**. Ficando assim:

```text
    ...

        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },

    ...
```

Essa alteração remove a gravidade do mundo que criamos no nosso jogo.

**Após adicionar as novas linhas salve as alterações e atualize o seu navegador, veja o que aconteceu**

### Dando movimento aos elementos

Já temos um personagem em jogo, agora precisamos movimentar ele de alguma forma. E podemos utilizar o teclado para fazer isso! O framework nos proporciona muitas facilidades e uma delas é o comando para capturar as teclas do nosso teclado. O **input.keyboard.createCursorKeys\(\)** nos retorna as teclas direcionais.

```text
function create () {

    ...

    // Captura todas as teclas do teclado
    cursors = this.input.keyboard.createCursorKeys()

}
```

Uma vez que já temos essas teclas guardadas em uma variavel, vamos até a função de **update** para criar um comportamento no nosso personagem de acordo com a tecla que for usada. Veja:

```text
// funcao para atualizar o jogo
function update () {

    // Controle pelas setas esquerda direita cima e baixo do teclado
    if (cursors.left.isDown) {
        hamtaro.x -= 3
    } else if (cursors.right.isDown) {
        hamtaro.x += 3
    } else if (cursors.up.isDown) {
        hamtaro.y -= 2
    } else if (cursors.down.isDown) {
        hamtaro.y += 2
    }

}
```

* cursors.**left**, cursors.**right**, cursors.**up**, cursors.**down** são nossas teclas direcionais, respectivamente: esquerda, direita, cima e baixo.
* cursors.left.**isDown** nos indica se a tecla foi acionada pela jogadora.
* hamtaro.**x** e hamtaro.**y** recebem sempre um valor atualizado devido ao **+=** ou **-=** que incrementa e decrementa a posição do personagem, fazendo assim, a movimentação do nosso personagem.

**Após adicionar as novas linhas salve as alterações e atualize o seu navegador, veja o que aconteceu**

### Criando animações

Para criar animações precisamos primeiro entender como está disposta a nossa imagem que contem os sprites do nosso personagem. Vamos abrir a imagem **assets/sprites/hamtaro/hamham.png** e verificar o que temos.

Você vai ver que algumas imagens são complementares, elas dão uma sensação de animação, e elas vão dar vida ao nosso personagem. Voltando a função **create**...

```text
function create () {

    ...

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

}
```

O comando **anims.create** receber um parametro de configuração, onde poderemos definir com quais sprites da nossa imagem \(**hamham.png**\), nós iremos criar uma animação.

1\) Primeiro passo definimos um nome para essa animação **key: 'direita'**, o nome será **direita**. Vamos utilizar esse nome futuramente.

2\) Vamos definir os frames, cada frame é um sprite da imagem que queremos usar para montar a nossa animação.

```text
O **anims.generateFrameNames** cria esses frames para nós. 

Mas antes, abra o arquivo **assets/sprites/maps/hamtaro.json**.
```

```text
{
    "frames":{
        "hamtaro_1":{
            "frame":{
               "x":259,
               "y":98,
               "w":38,
               "h":29
            },
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{
               "x":0,
               "y":0,
               "w":38,
               "h":29
            },
            "sourceSize":{
               "w":38,
               "h":29
            }
        },

        ...

    }
}
```

Essa é a aparencia do nosso **hamtaro.json**. Dentro desse arquivo existem todas as configurações que o comando **anims.generateFrameNames** precisa para identificar a imagem que precisamos. Passamos para o comando as seguintes informações: **prefix**, **start** e **end**. Isso quer dizer que na configuração passada no exemplo o comando está criando frames dos sprites **hamtaro\_1**, **hamtaro\_2** e **hamtaro\_3**

3\) **repeat** e **duration**, o valor **-1** em repeat significa que a animação será infinita e a duração de 300ms

Uma vez que a animação foi criada uma animação, podemos fazer uso da mesma.

Volte para a função **update** e atualize para ficar dessa forma:

```text
function update () {

    if (cursors.left.isDown) {
        hamtaro.x -= 3
    } else if (cursors.right.isDown) {
        hamtaro.x += 3

        hamtaro.anims.play('direita', true)

    } else if (cursors.up.isDown) {
        hamtaro.y -= 2
    } else if (cursors.down.isDown) {
        hamtaro.y += 2
    }
}
```

Adicionamos a linha `hamtaro.anims.play('direita', true)`. Esse comando faz a animação ser iniciada sempre que teclarmos o direcional para direita.

**Tente criar as demais animações com base no que foi explicado nesse tópico**.

**Após adicionar as novas linhas salve as alterações e atualize o seu navegador, veja o que aconteceu**

### Criando colisões

Chamamos de colisões o momento onde os elementos do jogo se encontram. Uma colisão pode encadear uma série de ações ou simplesmente impedir um personagem de ultrapassar um desafio. Para fazer os objetos se tocarem podemos usar o comando **physics.add.collider**, assim informamos para o framework quais elementos são passíveis de colisão, assim o jogo saberá que determinados objetos não podem ocupar o mesmo espaço ou acionarão algum evento. Segue o código:

```text
function create () {

    ...

    // Cria um sprite de comida
    comida = this.physics.add.sprite(10, 60, 'comida_atlas', 'sprite92')

    // Informa que o hamtaro e a comida são passíveis de colisão
    this.physics.add.collider(hamtaro, comida)    

}
```

Adicionamos um sprite novo e após isso informamos que o nosso personagem **hamtaro** vai colidir com a **comida**

**Após adicionar as novas linhas salve as alterações e atualize o seu navegador, veja o que aconteceu**

### Criando eventos com as colisões

Agora vamos criar um evento que acontecerá sempre que o nosso personagem colidir com uma comida, adicione o seguinte código:

```text
function create () {

    ...

    // Cria o evento que acontecera quando o hamtaro colidir com uma comida
    this.physics.add.overlap(hamtaro, comida, function(){

        // vamos implementar uma logica para essa colisãoo!

    }, null, this);

}
```

O **physics.add.overlap** faz a função de criar esse evento, sempre que o **hamtaro** e a **comida** colidirem, uma rotina dentro desse escopo irá ser iniciada. Nós próximos passos iremos implementar:

1\) A funcionalidade de mudar aleatóriamente a localizacao da comida na tela 2\) A funcionalidade de mudar o sprite da comida aleatóriamente 3\) A funcionalidade de adicionar pontos

#### Atualizando a posição do sprite do item

Vamos implementar a funcionalidade que irá trocar a posição da comida na tela aleatóriamente

```text
function create () {

    ...

    // Cria o evento que acontecera quando o hamtaro colidir com uma comida
    this.physics.add.overlap(hamtaro, comida, function(){

        // Escolhe randomicamente a nova posicao da comida
        comida.x = randomNumber(50, window.innerWidth - 50)
        comida.y = randomNumber(50, window.innerHeight - 50)

    }, null, this);

}
```

O comando **randomNumber** que está no bloco a seguir vai nos retornar sempre um número aleatório entre 50 ~ \( Tamanho da Tela - 50 \). Adicione essa função no inicio do arquivo **main.js**

```text
// Funcao para retornar um valor randomico 
function randomNumber (start, end) { return Phaser.Math.Between(start, end) }
```

#### Trocar o sprite

Estamos quase lá! Agora iremos implementar a nossa segunda funcionalidade.

Criaremos uma lista de números e cada número representará uma dessas comidinhas:

```text
    // cenoura = 92
    // pao = 88
    // limao = 87
    // banana = 86
    // rabanete = 85
    // cogumelo = 81
    // laranja = 78
    // figo = 77
    // pera = 76
```

**OBS:** você pode ir em **assets/sprites/maps/food.json** e escolher outros números que estejam mapeados e adicionar a nossa lista.

```text
function create () {

    ...

    // Cria o evento que acontecera quando o hamtaro colidir com uma comida
    this.physics.add.overlap(hamtaro, comida, function(){

        ...

        // Cada numero indica uma imagem para uma comida diferente
        let number = [92, 88, 87, 86, 85, 81, 78, 77, 76]

        // Escolhe um numero da lista acima 
        number = random(number)

        // Troca a imagem da comida de acordo com o numero escolhido
        comida.setTexture('comida_atlas', `sprite${number}`)

    }, null, this);

}
```

O comando **random** que está no bloco a seguir vai nos retornar sempre um número aleatório que exista dentro de uma lista. Adicione essa função no inicio do arquivo **main.js**

```text
// Funcao para retornar um valor randomico em um array
function random (array) { return array[Math.floor(Math.random() * array.length)] }
```

#### Adicionar pontuação

E por fim, vamos adicionar uma pontuação para cada comida que o personagem tocar.

```text
function create () {

    ...

    // Variavel para guardar a pontuação
    this.score = 0;

    // Cria o evento que acontecera quando o hamtaro colidir com uma comida
    this.physics.add.overlap(hamtaro, comida, function(){

        ...

        // Adiciona pontuação ao score
        this.score += 3

        // Adiciona a informação ao texto da tela
        pontuacao.setText(`SCORE: ${this.score}`)

    }, null, this);

}
```

### Fazendo Deploy do Jogo

Uma vez que criamos todas essas funcionalidades já temos um pequeno jogo pronto, outras funcionalidades podem ser criadas o que vale agora é a criatividade!

Mas essas melhorias no jogo podem ser feitas posteriormente, o que queremos agora é distribuir esse jogo na internet!

Se o seu servidor estiver funcionando, faça **CTRL + C** para derrubar-lo e digite o seguinte comando:

```text
$ npm run deploy
```

Siga os passos que forem pedidos nesse momento e acesse o seu site na url escolhida! =D

## FIM!

