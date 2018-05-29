
# Desenvolvendo um Jogo com JavaScript

Vamos agora iniciar o desenvolvimento de um jogo simples usando alguns dos conceitos que aprendemos hoje.
Preparamos para você um projeto pré-configurado com tudo que você vai presisar para construir e publicar seu jogo na internet.

- [Projeto pré-configurado](https://github.com/JsLadiesBR/tutorial-hamtaro)

No final desse capítulo você terá esse jogo implementado:

- [O jogo](http://hamtaro-jsladies.surge.sh/)

O código final se encontra nesse link:

- [Projeto Completo](https://github.com/JsLadiesBR/tutorial)

`OBS: Usaremos o framework Phaser para construção do jogo`

## Criando e configurando o ambiente

### Instalação do projeto

Uma vez que você já tem o **nodejs** instalado e já baixou o **projeto pré-configurado**, já podemos iniciar a instalação das dependências do projeto, para isso, abra o terminal no diretório do **projeto pré-configurado** e digite o comando:

```
$ npm install
```

Após a instalação das dependências, já podemos iniciar o servidor http, utilizando o comando:

```
$ npm run dev
```

## Iniciando o jogo

Nós escreveremos o código dentro do arquivo **main.js**, ele deve estar dentro do diretório **assets/js**

Nele você deverá escrever o seguinte código:

```
function preload () {}

function create () {}

function update () {}

function principal () {}

// Estamos adicionando uma função para o evento OnLoad da janela
window.onload = principal

```

**preload, create, update** são as nossas cenas do jogo que serão criadas. 

- **preload**: É a nossa primeira cena, aonde carregará todos os recursos visuais e sonoros que poderão vir a ser implementados no jogo.
- **create**: É a nossa segunda cena, aonde os elementos do jogo são configurados, essa cena é importante pois é nela que se encontra toda a lógica do jogo.
- **update**: É a nossa terceira cena, nessa cena podemos sempre atualizar o estado do jogo, como por exemplo a movimentação dos personagens.

A função **principal** vocês verão no proximo tópico.

## Configurando o jogo

Para iniciarmos um jogo precisamos informar algumas configurações básicas. O nosso framework exige que essas configurações sejam feitas para que ele possa entender o que você vai tentar implementar. Então vamos voltar ao código, olhando agora para a função **principal**:

```
function principal () {

    var largura = ''
    var altura = ''

    // cria uma variável com as configuraçes do jogo
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

```
    var largura = 500
    var altura = 500
```

Se você deseja que a tela do jogo seja o tamanho da tela da janela do seu navegador, ou seja, que ocupe toda a tela, você pode fazer assim:

```
    var largura = window.innerWidth
    var altura = window.innerHeight
```


Agora, vamos definir uma cor para o fundo da tela do jogo, procure por **backgroundColor** no exemplo acima e adicione uma cor de sua preferencia:

```
  backgroundColor: '#b3e6ff'
```

As cores são em hexadecimal, você pode procurar uma cor nesse [link](https://html-color-codes.info/Codigos-de-Cores-HTML/)

Por fim, vamos definir as nossas cenas **preload, create e update**. 
Por padrão o framework necessita que essas cenas sejam criadas e informadas na configuração. Então basta apenas adicionar a sua assinatura dessa forma:

```
    scene: {
        preload: preload,
        create: create,
        update: update
    }
```

Agora que ja temos o nosso jogo configurado, podemos visualizar no navegador como está ficando a primeira cara do jogo.


## Importando os recursos para o jogo

Como sabemos os jogos possuem vários recursos gráficos e sonoros, são esses recursos que melhoram a experiência do jogador. No nosso jogo não será diferente, dentro do diretório **assets/sprites** temos algumas imagens que vão nos acompanhar durante esse capitulo. Essas imagens são chamadas de [**sprites**](https://www.tecmundo.com.br/video-game-e-jogos/1044-o-que-sao-sprites-.htm). Agora vamos importar elas para o nosso jogo.

```
// funcao de carregar as imagens e outros recursos
const preload = function () {

    // Carrega os recursos de imagens para o jogo
    this.load.atlas('hamtaro_atlas', 'assets/sprites/hamtaro/hamham.png', 'assets/sprites/maps/hamtaro.json')
    this.load.atlas('comida_atlas', 'assets/sprites/assest/food.png', 'assets/sprites/maps/food.json')
    
}
```

Vamos apenas comparar essas linhas de código e entender o que é cada coisa que estamos escrevendo: 

```
    this.load.atlas( identificacao-do-sprite , endereco-da-imagem, endereco-do-mapeamento-json)
    this.load.atlas('hamtaro_atlas', 'assets/sprites/hamtaro/hamham.png', 'assets/sprites/maps/hamtaro.json')
```

`OBS: A primeira linha é um exemplo, a segunda linha é o nosso recurso importado anteriormente`

- A **identificacao-do-sprite** vai ser o nome que vou informar ao framework que eu quero dar a imagem que estou carregando. Escolhi como nome: **hamtaro_atlas** 

- O **endereco-da-imagem** é aonde se encontra as imagens do recurso que quero usar. No caso, elas estão dentro de: **assets/sprites/hamtaro/hamham.png**

- O **endereco-do-mapeamento-json** é aonde se encontra o mapeamento da imagem. Usamos o **JSON** para guardar informaçes de tamanho e posição de cada sprite contido na imagem. Então esse arquivo se encontra em: **assets/sprites/maps/hamtaro.json**

## Criando um elemento de texto

Vamos adicionar algum elemento de texto na nossa tela, utilizando uma função do framework **add.text()**:

```
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

```
    this.add.text( x , y , texto , configuracao )
```

Chamamos de parametros todas essas informações que ficam separadas entre virgulas e entre parenteses. 
Os nossos parametros são:

- **x** e **y**, que serão usados para determinar a posição que ficará o texto na tela. Usamos o plano cartesiano para orientar os elementos visuais na tela do computador. Então **x** e **y** esperam valores númericos e inteiros.
- **texto**, é propriamente o texto que queremos escrever na tela
- **configuração**, será todo o estilo que iremos aplicar no nosso texto. Podemos informar qual fonte (*fontFamily*) queremos usar, o seu tamanho (*fontSize*), o seu peso (*fontWeight*) e a cor (*color*)

**Após adicionar as novas linhas salve as alteraçes e atualize o seu navegador, veja o que aconteceu**

## Criando um elemento sprite

Agora vamos para a parte mais divertida! Vamos adicionar o nosso personagem!
Ainda na função **create**, vamos adicionar mais algumas linhas de código.

**OBS:** Para te orientar usaremos: **...** Isso significa que existe um código adicionado em uma etapa anterior.

```
function create () {

    ...
    
    // Cria um hamtaro que será controlado pela participante
    hamtaro = this.physics.add.sprite(150, 150, 'hamtaro_atlas')

}
```

Analisando o comando:
```
this.physics.add.sprite( x , y , identificacao-do-sprite )
```

Já vimos nos exemplos anteriores o que cada uma dessas informações significam. A **identificacao-do-sprite** foi definida no momento que fiz o carregamento dos recursos. Chamamos o recurso de **hamtaro_atlas**

**Após adicionar as novas linhas salve as alteraçes e atualize o seu navegador, veja o que aconteceu**

## Gravidade

Percebemos que o sprite apareceu e logo em seguida sofreu um efeito de queda. Isso acontece devido as nossas configurações de jogo. No inicio desse capítulo fizemos algumas configurações, procure por esse bloco de código e altere o valor de **gravity: { y: 200 }** para **gravity: { y: 0 }**. Ficando assim:

```
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

**Após adicionar as novas linhas salve as alteraçes e atualize o seu navegador, veja o que aconteceu**

## Dando movimento aos elementos

Já temos um personagem em jogo, agora precisamos movimentar ele de alguma forma. 
E podemos utilizar o teclado para fazer isso! O framework nos proporciona muitas facilidades e uma delas é o comando para capturar as teclas do nosso teclado. O **input.keyboard.createCursorKeys()** nos retorna as teclas direcionais.

```
function create () {

    ...
    
    // Captura todas as teclas do teclado
    cursors = this.input.keyboard.createCursorKeys()
    
}
```

Uma vez que já temos essas teclas guardadas em uma variavel, vamos até a função de **update** para criar um comportamento no nosso personagem de acordo com a tecla que for usada. Veja:

```
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

- cursors.**left**, cursors.**right**, cursors.**up**, cursors.**down** são nossas teclas direcionais, respectivamente: esquerda, direita, cima e baixo.
- cursors.left.**isDown** nos indica se a tecla foi acionada pela jogadora.
- hamtaro.**x** e hamtaro.**y** recebem sempre um valor atualizado devido ao **+=** ou **-=** que incrementa e decrementa a posição do personagem, fazendo assim, a movimentação do nosso personagem.

## Criando animaçes

```
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

```
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

## Criando colisões

```
function create () {
    
    ...
    
    // Cria um sprite de comida
    comida = this.physics.add.sprite(x, y, 'comida_atlas', 'sprite92')
    
    // Informa que o hamtaro e a comida são passíveis de colisão
    this.physics.add.collider(hamtaro, comida)    
    
}
```

## Criando eventos com as colisões


```
function create () {

    ...
    
    // Cria o evento que acontecera quando o hamtaro colidir com uma comida
    this.physics.add.overlap(hamtaro, comida, function(){
    
        // vamos implementar uma logica para essa colisãoo!

    }, null, this);

}
```

### Atualizando a posição do sprite do item


```
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

```
// Funcao para retornar um valor randomico 
function randomNumber (start, end) { return Phaser.Math.Between(start, end) }
```

### Trocar o sprite

```
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

```
// Funcao para retornar um valor randomico em um array
function random (array) { return array[Math.floor(Math.random() * array.length)] }
```

### Adicionar pontuação

```
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
